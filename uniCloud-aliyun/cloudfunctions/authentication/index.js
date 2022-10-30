'use strict';
const axios = require('axios')
const cheerio = require("cheerio")
const qs = require("querystring")
const axiosCookieJarSupport = require('axios-cookiejar-support').default;
const tough = require('tough-cookie');
const sha1 = require('js-sha1');
axiosCookieJarSupport(axios);
const cookieJar = new tough.CookieJar();
exports.main = async (event, context) => {
	const dbJQL = uniCloud.databaseForJQL({
		event,
		context
	})
	return new Promise(async (reslove, reject) => {
		try {
			const {
				data
			} = await axios.get('http://www.schxmvc.com.cn/eams/loginExt.action', {
				jar: cookieJar,
				withCredentials: true,
			})
			const $ = cheerio.load(data)
			const salt = $('script')[4].children[0].data.slice(323, 360)
			//使用延时器 避免点击过快的问题
			setTimeout(() => {
				axios({
					url: "http://www.schxmvc.com.cn/eams/loginExt.action",
					method: "post",
					data: qs.stringify({
						username: event.username,
						password: sha1(salt + (event.password)),
						session_locale: 'zh_CN'
					}),
					jar: cookieJar,
					withCredentials: true,
				}).then(({
					data
				}) => {
					let result = {}
					const $ = cheerio.load(data)
					//账号密码错误
					const errMsg = $('.grid').find('#loginForm').find(
							'.ui-state-error').children('.ui-icon').siblings('span')
						.text()
					//点击过快
					const errMsg_2 = $('.actionError').find('.ui-state-error')
						.children('.ui-icon').siblings('span').text()
					if (errMsg || errMsg_2) {
						result = {
							status: 400,
							msg: errMsg || errMsg_2
						}
					} else {
						//更新数据库信息
						console.log(event.openid)
						dbJQL.collection('users').where(`openid=='${event.openid}'`).update({
							account:event.username,
							password:event.password,
						})
						result = {
							status: 200,
							msg: '验证成功'
						}
						// result.Cookie=res.config.headers.Cookie
					}
					reslove(result)
				})
			}, 500);
		} catch (e) {
			reslove({
				status: 400,
				msg: e.message||'验证失败，请重试'
			})
		}
	})
};

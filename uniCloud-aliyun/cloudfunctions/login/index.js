'use strict';
exports.main = async (event, context) => {
	const dbJQL= uniCloud.databaseForJQL({event, context})
	const res=await uniCloud.httpclient.request(`https://api.weixin.qq.com/sns/jscode2session`,{
		method:'GET',
		data:{
			appid:'wx2e52704e88e04787',
			secret:'73eb5260b6858dd73bd5e9a752f9210c',
			js_code:event.code,
			grant_type:'authorization_code'
		},
		dataType:'json', 
	})  
	let {openid}=res.data
	let result
	const userQueryRes = await dbJQL.collection('users').where(`openid=="${openid}"`).get()
	result=userQueryRes.data[0]
	if(!!result){
		return result
	}else{
		result={
			nickName:`川华院用户`,
			avatarUrl:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0dc03301-09d5-467b-b2ae-c4f9b1d832c8/2f968943-d96a-4ffb-9471-e50ebed02bb1.png',
			openid,
			role:1, 
			regate:new Date().getTime(),
			account:'',
			password:''
		}
		const addUserId = await dbJQL.collection('users').add(result)
		result._id=addUserId.id
		return result
	}
};

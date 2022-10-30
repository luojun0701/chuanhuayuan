const db = uniCloud.database()

const addDb=(collection,data)=>{
	return new Promise((resolve)=>{
		db.collection(collection).add(data).then(res=>{
			resolve(res)
		})
	})
}

const updateDb=(collection,where,data)=>{
	return new Promise((resolve)=>{
		db.collection(collection).where(where).update(data).then(res=>{ 
			resolve(res)
		})
	})
}

// const getTemp=(collection,)=>{
// 	return 
// }
export {
	addDb, 
	updateDb
} 
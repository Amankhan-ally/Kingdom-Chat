document.getElementById("pst").addEventListener("click", function posted(){
 
 
 
// setTimeout(relod, 2000)
 
 
/* const timestamp = app.db.FieldValue.serverTimestamp();*/


const postno = Math.random();
 const date = new Date();
 var day = date.getDate();
 var month = date.toLocaleString("default", { month: 'short'});
 var year = date.getFullYear();
 
 var h = date.getHours();
 var m = date.getMinutes();
 var s = date.getSeconds();
 
 //const choice = {};
 
var key = Math.random();
  
  var verified = "Yes";
  var unverified = "No";
 let uname = document.getElementById("name").value; //name
const post = document.getElementById("write").value;

/*  setDoc(doc(db, 'Users',uname+key),{
  				Written_By: uname,
  				Wrote: "post",
					Time: day+" "+month+" "+year+" "+h+":"+m
  				
  });
  
})*/




if(document.getElementById("name").value=="Aman" ||document.getElementById("name").value=="theunbelievable&#1109;") {

/*collection(db, 'Users').doc(uname).add({
				Wrote: post
})*/

setDoc(doc(db, 'Users',uname+key),{
  				Written_By: uname,
  				Wrote: post,
					Time: day+" "+month+" "+year+" "+h+":"+m,
  				Verified: verified
  });
  
/*setDoc(doc(db, 'Users','uname+key','Messages','Chats'),{
Post: post
})*/
}

else if (document.getElementById("name").value=="&#1040;man") {
setDoc(doc(db, 'Admin',uname+key),{
  				Written_By: uname,
  				Wrote: post,
					Time: day+" "+month+" "+year+" "+h+":"+m,
  				Admin: "Yes"
  });
  
/*setDoc(doc(db, 'Admin','uname+key','Messages','Chats'),{
Post: post
})*/
				
}

else if (document.getElementById("name").value=="Bot") {
setDoc(doc(db, 'Users',uname+key),{
  				Written_By: uname,
  				Wrote: post,
					Time: day+" "+month+" "+year+" "+h+":"+m,
  				Bot: "Yes",
  				Verified: verified
  });
  
/*setDoc(doc(db, 'Users','uname+key','Messages','Chats'),{
Post: post
})*/
				
}

 
else {
setDoc(doc(db, 'Users',uname+key),{
  				Written_By: uname,
  				Wrote: post,
					Time: day+" "+month+" "+year+" "+h+":"+m,
					Verified: unverified
		});

/*setDoc(doc(db, 'Users','uname+key','Messages','Chats'),{
Post: post
}	)*/
} 
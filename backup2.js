if(document.getElementById("Uval").value=="theunbelievable&#1109;") {

/*collection(db, 'Users').doc(uname).add({
				Wrote: post
})*/

setDoc(doc(db, 'Users',uname+key),{
  				Written_By: uname,
  				Wrote: msg,
					Time: day+" "+month+" "+year+" "+h+":"+m,
  				Uid: myuid
  });
  
/*setDoc(doc(db, 'Users','uname+key','Messages','Chats'),{
Post: post
})*/
}

else if (document.getElementById("Uval").value=="&#1040;man") {
setDoc(doc(db, 'Admin',uname+key),{
  				Written_By: uname,
  				Wrote: msg,
					Time: day+" "+month+" "+year+" "+h+":"+m,
  				Admin: "Yes",
  				Uid: myuid,
  });
  
/*setDoc(doc(db, 'Admin','uname+key','Messages','Chats'),{
Post: post
})*/
				
}

else if (document.getElementById("Uval").value=="Bot") {
setDoc(doc(db, 'Users',uname+key),{
  				Written_By: uname,
  				Wrote: msg,
					Time: day+" "+month+" "+year+" "+h+":"+m,
  				Bot: "Yes",
  				Verified: verified,
  				Uid: myuid
  });
  
/*setDoc(doc(db, 'Users','uname+key','Messages','Chats'),{
Post: post
})*/
				
}

 
else {
setDoc(doc(db, 'Users',uname+key),{
  				Written_By: uname,
  				Wrote: msg,
					Time: day+" "+month+" "+year+" "+h+":"+m,
					Uid: myuid
		});

/*setDoc(doc(db, 'Users','uname+key','Messages','Chats'),{
Post: post
}	)*/
} 
}	)	

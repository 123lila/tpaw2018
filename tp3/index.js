$(function(){
	
	var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
	
	$( "#Date_naissance" ).datepicker();

  $("#validate").click(function(){
		var mail=$("#mail").val();
	  if (($("#Nom").val() == " " )|| ($("#Prenom").val() == " ") || ($("#Date_naissance").val() == " ") || ($("#adresse").val() == " ") || ($("#mail").val()=="")){		
		$(".modal-body").html("Veuillez remplir tous les champs svp");
		1
		$(".modal").modal("show");
	
	  }else {
			if(!regex.test(mail)){
				$(".modal-body").html("le format du mail est incorect");
				$(".modal").modal("show");
			 }
		
	  else{
		  $(".modal-title").html("Bienvenue   " + $("#Prenom").val() );
		$(".modal-body").html("vous etes nés le   " + $("#Date_naissance").val()  + " et  vous habitez  " 
		+ "<img src='https://maps.googleapis.com/maps/api/staticmap?center=" + $("#adresse").val() + "&markers="+$("#adresse").val()+"&size=300x300'/><br>"  +  $("#adresse").val() );
		
	
		$(".modal").modal("show");
		
}}
  }
);

}); 
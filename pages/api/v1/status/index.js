function status(request, response){
  response.status(200).json({"chave":"O pai é top"});
}

export default status;
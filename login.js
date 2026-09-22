function login(identifiant, password) {
  console.log("Tentative de connexion pour " + identifiant);
  if (!identifiant || !password) {
    return { succes: false, message: "Identifiants manquants" };
  }
  return { succes: true, utilisateur : identifiant };
}
 
module.exports = { login };

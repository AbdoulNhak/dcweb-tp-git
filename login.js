function login(username, password) {
  console.log("Tentative de connexion pour " + username);
  if (!username || !password) {
    return { succes: false, message: "Identifiants manquants" };
  }
  return { succes: true, utilisateur: username };
}
 
module.exports = { login };

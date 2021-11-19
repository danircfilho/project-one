import Userfront from "@userfront/react";

Userfront.init("xbrzvzbw");

//Cadastro
export const SignupForm = Userfront.build({
  toolId: "lkambr"
});

//Login
export const LoginForm = Userfront.build({
  toolId: "ddlmad"
});

//Logout
export const LogoutButton = Userfront.build({
    toolId: "knaoka"
});

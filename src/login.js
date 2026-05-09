const usuariosDoSite = [
  {
    id: 1,
    nome: 'Aline Brocker',
    email: 'aline.brocker@test.com',
    senha: 'senha123',
    expirado: false
  },
    {
    id: 2,
    nome: 'ET Bilu',
    email: 'et.bilu@test.com',
    senha: 'etbilu123',
    expirado: false
  },
  {
    id: 3,
    nome: 'Maria Silva',
    email: 'maria.silva@test.com',
    senha: 'maria123',
    expirado: false
  },
  {
    id: 4,
    nome: 'João da Silva',
    email: 'joao.dasilva@test.com',
    senha: 'joao123',
    expirado: true
  }
]

export function realizarLogin(email, senha) {
  const usuario = usuariosDoSite.find(u => u.email == email)

  if (!usuario) {
    return 'Usuário não encontrado!'
  }

  if (usuario.expirado) {
    return 'Creddencial expirada. Renove suas credenciais!'
  }

  if (usuario.senha !== senha) {
    return 'Senha incorreta para o usuário encontrado!'
  }

  return 'Login realizado com sucesso!!'
}

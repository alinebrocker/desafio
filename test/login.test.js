import{ realizarLogin} from '../src/login.js';
import assert from 'node:assert';

describe('realizarLogin', function () {
  it('Teste 1 - Realizar login com sucesso', function () {
    assert.equal(
      realizarLogin('aline.brocker@test.com', 'senha123'),
      'Login realizado com sucesso!!'
    )
  })

  it('Teste 2 - Credencial expirada', function () {
    assert.equal(
      realizarLogin('joao.dasilva@test.com', 'joao123'),
      'Creddencial expirada. Renove suas credenciais!'
    )
  })

  it('Teste 3 - Usuario não encontrado', function () {
    assert.equal(
      realizarLogin('userNaoEncontrado@test.com', 'test'),
      'Usuário não encontrado!'
    )
  })

  it('teste 4 - Senha incorreta para o usuario encontrado', function () {
    assert.equal(
      realizarLogin('et.bilu@test.com', 'senhaErrada'),
      'Senha incorreta para o usuário encontrado!'
    )
  })
})

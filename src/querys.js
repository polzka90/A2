query getCep($numeroCep: String!) {
    cep(numero: $numeroCep) {
          cep
          logradouro
          complemento
          bairro
          localidade
          uf
          unidade
          ibge
          gia
    }
  }


  {
    "numeroCep":"08220300"
  }
function aplicarMascara(id, formatar) {
  const campo = document.getElementById(id);
  campo.addEventListener('input', () => {
    campo.value = formatar(campo.value.replace(/\D/g, ''));
  });
}

aplicarMascara('cpf', v => v.slice(0, 11)
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d{1,2})$/, '$1-$2'));

aplicarMascara('telefone', v => v.slice(0, 11)
  .replace(/(\d{2})(\d)/, '($1) $2')
  .replace(/(\d{4,5})(\d{4})$/, '$1-$2'));

aplicarMascara('cep', v => v.slice(0, 8)
  .replace(/(\d{5})(\d)/, '$1-$2'));
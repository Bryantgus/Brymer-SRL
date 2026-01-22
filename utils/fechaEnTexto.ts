export function fechaEnTexto(fechaInput: Date | string): string {
  const fecha = new Date(fechaInput);

  if (isNaN(fecha.getTime())) return "";

  const meses = [
    "enero", "febrero", "marzo", "abril",
    "mayo", "junio", "julio", "agosto",
    "septiembre", "octubre", "noviembre", "diciembre"
  ];

  const dia = fecha.getDate();
  const mes = meses[fecha.getMonth()];
  const ano = fecha.getFullYear();

  return `${dia} de ${mes} de ${ano}`;
}

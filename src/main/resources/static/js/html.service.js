function getInnerHTMLTableBody(data) {
  let html = "";

  data.forEach(item => {
    html += "<tr>";
    html += `<td class="field-name">${item.name}</td>`;
    html += `<td class="field-value">${item.value}</td>`;
    html += "</tr>";
  });

  return html;
}
function downloadCsv() {
  const filename = 'my-data.csv';
  const content = 'a,b,c';

  const blob = new Blob([content], {type: 'text/csv;charset=utf-8;'});

  if (navigator.msSaveBlob) { // IE 10+
    navigator.msSaveBlob(blob, filename);
  } else {
    const link = document.createElement("a");
    if (typeof link.download !== undefined) { // feature detection
      // Browsers that support HTML5 download attribute
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}

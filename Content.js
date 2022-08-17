var url = window.location.href;
if (url.includes("http://172.16.222.1:1000/login?")) {
  function fillforMe() {
    document.querySelector("#ft_un").value = "2021BCS0024";
    document.querySelector("#ft_pd").value = "DT78UJ56";
    document.querySelector('input[value="Continue"]').click();
  }
  function startit() {
    fillforMe();
  }
  window.onload = startit;
}

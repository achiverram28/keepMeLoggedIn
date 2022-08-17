var url = window.location.href;
if (url.includes("http://172.16.222.1:1000/login?")) {
  function fillforMe() {
    document.querySelector("#ft_un").value = "";//enter your rollnumber
    document.querySelector("#ft_pd").value = "";//enter your password
    document.querySelector('input[value="Continue"]').click();
  }
  function startit() {
    fillforMe();
  }
  window.onload = startit;
}


const welcomeScreen = `
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::                                                                                                                           ::
::                          888           888b     d888                          d8888      888                              ::
::                          888           8888b   d8888 Y8P          Y8P        d88888      888               Y8P            ::
::                          888           88888b.d88888                        d88P888      888                              ::
::   88888b.   .d88b.   .d88888  .d88b.   888Y88888P888 888 88888b.  888      d88P 888  .d88888 88888b.d88b.  888 88888b.    ::
::   888 "88b d88""88b d88" 888 d8P  Y8b  888 Y888P 888 888 888 "88b 888     d88P  888 d88" 888 888 "888 "88b 888 888 "88b   ::
::   888  888 888  888 888  888 88888888  888  Y8P  888 888 888  888 888    d88P   888 888  888 888  888  888 888 888  888   ::
::   888  888 Y88..88P Y88b 888 Y8b.      888   "   888 888 888  888 888   d8888888888 Y88b 888 888  888  888 888 888  888   ::
::   888  888  "Y88P"   "Y88888  "Y8888   888       888 888 888  888 888  d88P     888  "Y88888 888  888  888 888 888  888   ::
::                                                                                                                           ::
::                                                                                                                           ::
::                                        888               888                            888    d8b 888     d8b            ::
::                                        888               888                            888    Y8P 888     Y8P            ::
::                                        888               888                            888        888                    ::
::                        888d888 8888b.  88888b.  888  888 888 .d8888b  88888b.   8888b.  888888 888 888     888 88888b.    ::
::                        888P"      "88b 888 "88b 888  888 888 88K      888 "88b     "88b 888    888 888     888 888 "88b   ::
::            888888      888    .d888888 888  888 888  888 888 "Y8888b. 888  888 .d888888 888    888 888     888 888  888   ::
::                        888    888  888 888  888 Y88b 888 888      X88 888 d88P 888  888 Y88b.  888 888 d8b 888 888  888   ::
::                        888    "Y888888 888  888  "Y88888 888  88888P' 88888P"  "Y888888  "Y888 888 888 Y8P 888 888  888   ::
::                                                                       888                                                 ::
::                                                                       888                                                 ::
::                                                                       888                                                 ::
::                                                                                                                           ::
::   Version 1.0.0                                                                                                           ::
::   (c) 2021 Rahul S. Patil <patil.rahuls@outlook.com> https://rahulspatil.in                                               ::
::                                                                                                                           ::
::   A Simple, Minimal and Lightweight tool for quick access to MySQL databases.                                             ::
::                                                                                                                           ::
::   Developed in Javascript (Node.js)                                                                                       ::
::   Author  : Rahul S. Patil                                                                                                ::
::   Webiste : https://rahulspatil.in                                                                                        ::
::   GitHub  : https://github.com/patil-rahuls/nodeMiniAdmin                                                                 ::
::                                                                                                                           ::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
`;
const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const {performance} = require('perf_hooks');
try {
  require.resolve('sync-mysql');
} catch (e) {
  console.warn("Just one last step.\nPlease install the module 'sync-mysql' using the following command and run this app again !");
  console.warn("npm install sync-mysql --save");
  process.exit();
}
const mysqlSync = require('sync-mysql');
!fs.existsSync('connections.json') && fs.writeFileSync("connections.json", JSON.stringify({}),
  function(err) {
    if(err) {
      console.log(err);
      console.log("Try with elevated privileges (sudo / Administrator) !!");
      process.exit();
    }
    console.log("Created 'connections.json' file !!");
  }
);
const _css = `*{font-family:Helvetica,"Trebuchet MS",Verdana,sans-serif;outline:0;font-size:12px;color:#fff}body{margin:0!important;background-color:grey}.hide{display:none}.show{display:block}.left{float:left}.right{float:right}header{position:fixed;display:inline-block;width:100%;height:30px;z-index:99999;top:0;left:0;text-align:center;list-style:none;background-color:#313233}header li{padding:6px 10px}header li>*{background-color:#515253;padding:2px 10px;border-radius:2px}footer{position:fixed;display:inline-block;width:100%;height:16px;z-index:99999;left:0;bottom:0;padding:2px 10px;list-style:none;background-color:#313233;box-shadow:0 -1px 6px #313233}footer li>*{padding:1px 10px;cursor:auto}footer li span{font-size:11px}table{border-collapse:collapse;width:100%;border-spacing:0}table td,table th{text-align:left;padding:1px 8px;word-wrap:break-word;max-width:500px}table th{position:sticky;position:-webkit-sticky;z-index:77777;top:0;padding:4px;box-shadow:0 2px 2px -1px rgba(0,0,0,.4);background-color:#111213}table tr:nth-child(even){background-color:#515253}table tr:nth-child(odd){background-color:#717273}table tr:focus,table tr:hover{background-color:#111213}table tr:last-child th:first-child{border-bottom-left-radius:6px}table tr:last-child th:last-child{border-bottom-right-radius:6px}#resultArea #breadcrumbsTable{position:fixed;z-index:77777}#resultArea #breadcrumbsTable,#resultArea #breadcrumbsTable tr,#resultArea #breadcrumbsTable tr td{padding:5px}#resultArea #breadcrumbsTable button{color:#000;background:#919293}#resultArea #breadcrumbsTable button.exportCSV{background:#919293}#resultArea #breadcrumbsTable tr th .active{background-color:#515253;color:#fff}#resultArea #resultTable{margin:26px 10px; width:90%; margin-bottom:42px}#resultArea #breadcrumbsTable th{background-color:#313233;top:50px}#resultArea #resultTable th{top:66px}#content{width:100%;margin-top:30px;display:flex}#content #sidebar{position:fixed;z-index:99999;max-width:600px;overflow:auto;height:100%;background-color:#313233;transition:all .1s}#content #sidebar.collapsed{transform:translateX(-100%);position:absolute}#content #sidebar>*{padding:2px 8px;cursor:pointer;color:#00bfff;display:list-item}#content #sidebar>:hover{color:orange}#content #queryArea #queryTabs{display:block;position:fixed;z-index:88888;height:24px;top:30px;background-color:#313233;font-size:14px;border-bottom-right-radius:6px;box-shadow:0 2px 2px -1px rgba(0,0,0,.4)}#content #queryArea #queryTabs button{margin:2px 10px; background:#515253}#content #queryArea #queryTabs button.active,#content #queryArea #queryTabs button:hover{background-color:#add8e6;color:#000}#content #queryArea textarea{display:block;position:fixed;z-index:88888;background-color:#000;color:#0f0!important;border:1px solid #313233;border-top:none;top:54px;width:84%;max-width:84%;min-width:84%;height:30%;min-height:10%;max-height:70%;padding:8px;font-size:12px;font-family:"courier new";box-shadow:1px 2px 4px #000}#content #queryArea textarea:focus{color:#0f0!important}#messageArea{background-color:transparent;width:100%;height:40px;box-shadow:none}#connection{position:fixed;margin-left:5%;z-index:999999;border-bottom-left-radius:6px;border-bottom-right-radius:6px;color:#fff;background-color:#000;box-shadow:1px 2px 6px #000}#connection table th{background-color:#000;padding:8px}#connection table td, #connection table td label{color:#000}#connection table tr:nth-child(even){background-color:#818283}#connection table tr:nth-child(odd){background-color:#b3b3b3}#content .tips{color:#add8e6;font-weight:100}.blur{-webkit-filter:blur(3px);-moz-filter:blur(3px);-o-filter:blur(3px);-ms-filter:blur(3px);filter:blur(3px);width:98%!important}.msg{padding:2px 4px;width:fit-content;border-radius:2px;}.ok{background-color:#0f9d58}.err{background-color:#de5246}.info{background-color:#4c8bf5}.loading{background-color:orange;color:#313233}@keyframes blink{50%{color:transparent}}.loader__dot{animation:1s blink infinite}.loader__dot:nth-child(2){animation-delay:250ms}.loader__dot:nth-child(3){animation-delay:.5s}input[type=password],input[type=text],select{color:#313233;border:1px solid #ddd;border-radius:2px;box-shadow:inset 1px 1px 2px #ddd;background:#fff} select#conn{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH5QkDCDAQWRqaIQAAA5pJREFUWMPFl8+LHFUQxz/1Xndv705mVxR3DcJ6yCUXvehB8bJgLh6UHAQRMYqoIBoUD0Y8hIhelBAiCmJUCCJBvAjevPgPKIiIh0XcyGKQFd0fs9nZme5+VR52ZnZ2fuxMOoN+oQ9Tb17V91V9u+q1nDix5ABhAlAV770VZmP7s3bwm35EQJWTeS73p6nquPvcJE4OUKkEBe4DPr9+3T8sYiqCjdo3MQKyl3QFjgGf5rk7FQJuFInoABuHeW8jWQ/C6uqUVauhvfcocFFVFsz4II6toTr4sAcI5LncmmUy12Uy+gU60FatBgVu6bLNAW+ZcUeWydvT07qZ5/0l7xCIItOikJeB54GiZCXmen5PAaeBhd1dd2Z2NvxRrzs/kICI0TrB0ZLBh8EDTwDztZp/dXpaf8lz6ZCYmAjHwEPAF7u77t44Nv0/CAA0gaxb5v8lgW+BU5VK+Lko9sXY0YCZtBnuUl6EU0DSYwvAV8DrR46Ea43GEBGGIAJ8DHwDozvYACjwIvBUly0DLolwLk11ozd4TwaQNNWri4vN3/J8+CxRBTegcMvLMySJPtpl2gHOi3A+SbQ+qAccIABQFOJWVtLDdGEhSOq9NXsXFhaysLERtZmvA+dE7FIUUYQwfOaMJcJWP9eikEfMeNK5/deoK4Ntf2vAae/toyhi5GgeSUAECwFfFPIM8AlwrFLRPo3U616AX4HnkkS/FMHGuRdEhy16b5plbtqMV4AzwCxDBKqKE+GK99ZQHX/MDyUQxxYaDXebGWeBF9h7xQBsbS2x48frRTv1rVGMGYWIYSYdW3eJ4thYXZ1yA/tAN2ZmNNRq/i7gXeCxnlLdmST6wAixDoMAf8ax/d4uTx+BSiWEra3oHuAisDTAyePAyRLB2/E+jCJ7I8+ln4AItrUVLQHvA3cPcZLQ3+1uBFPdV4pOGtNUQ57Lg8DlQ4JPHB0CrZRcA36iXCu+OQIhiJuZ0RX2FH+Z8gPphnBAA1kmPk31r2bTvWbGOvASkPbsqQGblPuYiYCN1uTtJwB78yCOrZbnctaMv4E3gWrXX64A71HuLiEi1Eb2AVVcFFkzBC6oyjrwDnB7a3lze9tfnZ/PS11mQhBR3c/e0E5ohnhPELHPQpB/gAvAIiCLi03Z3vYTuU0d6sQMEUHSVL8GngWWASn36VKCQBtFIW5urvgOeBr4YWdnMqeHvRKMdZ6dHe+iyL4PgR9bGZhIHv4FMvJqcogayrIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDktMDNUMDg6NDg6MTYtMDQ6MDDjc4roAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA5LTAzVDA4OjQ4OjE2LTA0OjAwki4yVAAAAABJRU5ErkJggg==) 96%/10% no-repeat #fff;background-color:#fff} select#db{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjIgMTguMDU1djIuNDU4YzAgMS45MjUtNC42NTUgMy40ODctMTAgMy40ODctNS4zNDQgMC0xMC0xLjU2Mi0xMC0zLjQ4N3YtMi40NThjMi40MTggMS43MzggNy4wMDUgMi4yNTYgMTAgMi4yNTYgMy4wMDYgMCA3LjU4OC0uNTIzIDEwLTIuMjU2em0tMTAtMy40MDljLTMuMDA2IDAtNy41ODgtLjUyMy0xMC0yLjI1NnYyLjQzNGMwIDEuOTI2IDQuNjU2IDMuNDg3IDEwIDMuNDg3IDUuMzQ1IDAgMTAtMS41NjIgMTAtMy40ODd2LTIuNDM0Yy0yLjQxOCAxLjczOC03LjAwNSAyLjI1Ni0xMCAyLjI1NnptMC0xNC42NDZjLTUuMzQ0IDAtMTAgMS41NjItMTAgMy40ODhzNC42NTYgMy40ODcgMTAgMy40ODdjNS4zNDUgMCAxMC0xLjU2MiAxMC0zLjQ4NyAwLTEuOTI2LTQuNjU1LTMuNDg4LTEwLTMuNDg4em0wIDguOTc1Yy0zLjAwNiAwLTcuNTg4LS41MjMtMTAtMi4yNTZ2Mi40NGMwIDEuOTI2IDQuNjU2IDMuNDg3IDEwIDMuNDg3IDUuMzQ1IDAgMTAtMS41NjIgMTAtMy40ODd2LTIuNDRjLTIuNDE4IDEuNzM4LTcuMDA1IDIuMjU2LTEwIDIuMjU2eiIvPjwvc3ZnPg==) 96%/10% no-repeat #fff;background-color:#fff}select option{background-color:#fff;color:#313233}button{color:#fff;background-color:#4c8bf5;border:0;border-radius:4px;padding:2px 10px;outline:0;cursor:pointer}button:hover{color:#fff;background-color:#313233;outline:0;text-decoration:none}span[data-href]{cursor:pointer}a,a:focus,a:visited,button,button:focus,button:hover,input[type=reset],input[type=reset]:focus,input[type=reset]:hover,input[type=submit],input[type=submit]:focus,input[type=submit]:hover,small,small:focus,small:visited{outline:0;text-decoration:none}a:hover{color:#4c8bf5}small{float:right;margin-right:20px;cursor:pointer}.transparentBG{background-color:transparent}`;
const _favicon = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACFUlEQVQ4T32Tu2tTURzHv79zc/NoNCZWQgNtk6FVUNEptBSXOogZ+hc4WJzER31MoZDJQeiiVHFw0s3FTWJwEYeiJgE3bUUhQVu0McUS0xhz7/nKvZFKmscZz+H3+T7OOYIBa+pqdloLZwGZhMawAApgjVAlpfTbKiUn/eaTl5/dEaWuDxIgudoXMDGXeT4UiZ81g8MwPL4ODrWFVmMbO1sl7AIquUMxZei4RU+IGvrSk9O3VjfD0/WmCVEeKMN0IVpboN3aBUrlRfSmCBZIxPfaJYH33w7i3quTKJajnceiEAiPQipPoxr7/zvpykwgv3YE6fw5EHDdGKYfpv8ARBmQ6lKM9BEIAvASVG2EWACaAqkLirXjyPy40cW2mnVI5XaMyhjUNfBmexKL6xfg+KRtw2410Gr8xJ9fFcjnK6P0BgmPn1AexyLheKUWOF1ZvwUrmyNIf53pUhFRkE8XxzigAXeoUB9BemMGICGG00EAZiCMQGQMUpwb51CEMAOOeqeIbQGtHaDYPIYHsYWeOWVldtwpt12cQah/EG0LqNv7H/YdxcPEHgDxhdDLkj0VZ8jsn8ImsM5Q/u6JpQwpQm3XLOUtvbt/ZsMVfZRMUAngU4RHub/FXc5gSwNN7TxW5uYL5VSvDPI4mVgjcHjwRWJ5vlC61hOQTU34vletlCKmCCREGCLFMbClhB8BvDyfL7/uJ/AXpKjR9N7H+jgAAAAASUVORK5CYII=`;
const head = `<head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><title>nodeMiniAdmin For MySQL</title><meta name="description" content="A Simple, Minimal and Lightweight tool for quick and easy access to MySQL databases"><meta name="viewport" content="width=device-width, initial-scale=1"><style>${_css}</style><link rel="shortcut icon" type="image/png" href="${_favicon}"/></head>`;
let _script = "const getCookie=function(name){let cookieValue=null; if (document.cookie && document.cookie !=''){const cookies=document.cookie.split(';'); for (let cookie of cookies){cookie=cookie.trim(); if (cookie.substring(0, name.length + 1)==(name + '=')){cookieValue=decodeURIComponent(cookie.substring(name.length + 1)); break;}}}return cookieValue;};const IsJsonString=function(str){try{JSON.parse(str);}catch (e){return false;}return true;};const links=document.querySelectorAll('span[data-href]');for(const link of links){link.addEventListener('click', function(e){window.open(e.target.getAttribute('data-href'), '_blank');});};const showMessage=function(msg , typeClass='ok'){const messageBox=document.getElementById('message'); messageBox.classList=[]; messageBox.classList.add('msg'); messageBox.classList.add(typeClass); if(typeClass==='loading'){for(const i of [0,0,0]) msg +=\"<span class='loader__dot' style='color:#313233'>.</span>\";}messageBox.innerHTML=msg;};const hideMessageAfter=function(timeout){setTimeout(function(timeout){document.getElementById('message').classList.add('hide');}, timeout);};const copyToClipboard=function(text){navigator.clipboard.writeText(text).then(function(){hideMessageAfter(1000); showMessage('Copied !');}, function(err){console.error('Async: Could not copy text: ', err);});};document.addEventListener('click',function(e){document.querySelector('#resultTable tbody').addEventListener('click', function(row){const cellText=row.target.closest('td')?.innerHTML; cellText && copyToClipboard(cellText);});});const loadConnectionForm=function(action){if(action=='edit') document.getElementById('editForm').submit(); else window.open('/connection', '_self');};const toggleSidebar=function(){document.getElementById('sidebar').classList.toggle('collapsed');};document.querySelector('.toggleSidebar').addEventListener('click', function(){toggleSidebar();});document.querySelector('.toggleQueryArea').addEventListener('click', function(){const queryArea=document.getElementById('queryArea').classList; this.textContent=queryArea.toggle('hide') ? ' ▼ ' : ' ▲ '; document.getElementById('sidebar').classList.contains('collapsed') || toggleSidebar();});document.getElementById('query').addEventListener('click', function(){const sidebar=document.getElementById('sidebar').classList; sidebar.contains('collapsed') || sidebar.toggle('collapsed');});document.querySelector('.exportCSV').addEventListener('click', function(){const rows=document.querySelectorAll('table#resultTable tr'); if(rows.length){const csv=[]; for(const eachRow of rows){const csvRow=[]; const colsOfEachRow=eachRow.querySelectorAll('td, th'); for(const eachColOfEachRow of colsOfEachRow){let cell=eachColOfEachRow.innerText.replace(/(\\r\\n|\\n|\\r)/gm, '').replace(/(\\s\\s)/gm, ' '); cell=cell.replace(/\"/g, ''); csvRow.push(cell);}csv.push(csvRow.join(';'));}const csvString=csv.join('\\n'); const filename='export_' + new Date().toLocaleDateString() + '.csv'; const link=document.createElement('a'); link.style.display='none'; link.setAttribute('target', '_blank'); link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvString)); link.setAttribute('download', filename); document.body.appendChild(link); link.click(); document.body.removeChild(link);}else{showMessage('No results !!', 'err');}});const validate=function(stmt){showMessage('Checking Query ', 'loading'); const conn_id=document.getElementById('conn').value; const db=document.getElementById('db').value; const params='test=' + stmt + '&conn_id=' + conn_id + '&db=' + db; var http=new XMLHttpRequest(); http.open('POST', '/validate', true); http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); http.setRequestHeader('X-CSRFToken', getCookie('csrftoken')); http.onreadystatechange=function(){if (http.readyState==XMLHttpRequest.DONE){if(IsJsonString(http.responseText)){const explainTable=JSON.parse(http.responseText); if (typeof explainTable=='object'){document.getElementById('query').style.color='#fff !important'; showMessage(\"Query looks valid!! No errors found!! Check Browser's CONSOLE to view the result of EXPLAIN.\"); console.table(explainTable);}else{document.getElementById('query').style.color='orangered !important'; showMessage(explainTable || 'Please correct your query!', 'err');}}else showMessage('Something went wrong. This will be fixed in the next commit.', 'err'); hideMessageAfter(4000);}}; http.send(params);};const validateOnSemiColon=function(stmt){if (stmt.slice(-1)===';'){stmt=stmt.split(';')[0]; validate(stmt); document.getElementById('query').value=sqlFormatter.format(stmt,{language: 'mysql'});}};const execStmt=function(stmt){if(typeof stmt !=='string' || !stmt) stmt=document.getElementById('query').value; else document.getElementById('query').value=stmt; if (stmt.toUpperCase().includes('SELECT') && !stmt.toUpperCase().includes('LIMIT')){if (stmt[-1]==';'){stmt=stmt.slice(0,-1);}stmt +=' LIMIT 0,50';}document.getElementById('query').value=stmt; for (const i of [1,2,3,4]) localStorage.setItem('page-'+i, document.getElementById('page-'+i).value); showMessage('Executing Query ', 'loading'); saveTab(lastTabID); const db=document.getElementById('db').value; const params='test=' + stmt + '&db=' + db; var http=new XMLHttpRequest(); http.open('POST', '/queryHandler', true); http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); http.setRequestHeader('X-CSRFToken', getCookie('csrftoken')); http.onreadystatechange=function(){if (http.readyState==XMLHttpRequest.DONE){if(IsJsonString(http.responseText)){const resultSet=JSON.parse(http.responseText); console.log(resultSet); if (typeof resultSet=='object'){document.querySelector('#queryTime').textContent=Math.round(resultSet.queryTime)/1000 + ' Seconds'; document.querySelector('#recordsCount').textContent=resultSet.queryResultRows.length; showMessage(resultSet.message, resultSet.messageState); if(resultSet.queryResultFields.length){queryOk=true; let fieldsHTML='<tr>'; if (resultSet.queryResultFields){for (const field of resultSet.queryResultFields) fieldsHTML +='<th>' + field + '</th>';}fieldsHTML +='</tr>'; let rowsHTML=''; if (resultSet.queryResultRows){for (const row of resultSet.queryResultRows){rowsHTML +='<tr>'; for (const [,val] of Object.entries(row)) rowsHTML +='<td>' + val + '</td>'; rowsHTML +='</tr>';}}else rowsHTML +=\"<tr><td colspan='all'> No results found. </td></tr>\"; document.getElementById('resultTable').innerHTML= '<tbody style=\"margin-top:10px !important;position:absolute;margin-bottom:30px\">' + fieldsHTML + rowsHTML + '</tbody>'; document.getElementById('resultArea').classList=''; document.getElementById('queryArea').classList=''; document.getElementById('queryArea').classList.add('hide'); document.querySelector('.toggleQueryArea').textContent=' ▼ '; if(queryOk && stmt.toUpperCase().includes('LIMIT')){const limits=stmt.split('LIMIT')[1].trim(); localStorage.setItem('limits', limits); for(const i of [1,2,3,4]){let to=''; const paginationBtn=document.getElementById('page-'+i); paginationBtn.classList.remove('active'); paginationBtn.value=localStorage.getItem('page-'+i); if(i>1) to=Number(paginationBtn.value.split(',')[0]) + 49; else to=50; paginationBtn.innerText=paginationBtn.value.split(',')[0] + '-' + to;}var pag_btn=document.querySelectorAll(\"button[value='\" + limits + \"']\")[0]; pag_btn && pag_btn.classList.add('active');}}else{document.getElementById('resultArea').classList=''; document.getElementById('queryArea').classList=''; document.getElementById('resultArea').classList.add('hide'); document.querySelector('.toggleQueryArea').textContent=' ▲ '; queryOk=false;}}else showMessage('Something went wrong. Please try refreshing the page', 'err');}else showMessage('Something went wrong. This will be fixed in the next commit.', 'err'); hideMessageAfter(4000);}}; http.send(params);};document.querySelector('.execStmt').addEventListener('click', execStmt);document.getElementById('query').addEventListener('focus', function(){this.style.color=queryOk ? '#00ff00' : 'orangered';});document.getElementById('query').addEventListener('keydown', function(eventObj){if (eventObj.ctrlKey && eventObj.keyCode==13){execStmt(this.value);}});const select_table=function(tbl){const qry = 'SELECT * FROM ' + tbl + ' LIMIT 0,50 '; if(confirm('Current tab\\'s content will be replaced with\\n\"'+qry+'\"\\nWant to proceed?',false)){document.getElementById('sidebar').classList.toggle('collapsed'); execStmt('SELECT * FROM ' + tbl + ' LIMIT 0,50 ');}};const selectRange=function (range){const stmtElem=document.getElementById('query'); let stmt=stmtElem.value; stmt=stmt.replace(/\\s\\s+/g, ' '); const limitPresent=stmt.lastIndexOf('LIMIT'); if (limitPresent) stmt=stmt.substring(0, limitPresent); stmtElem.value=stmt + ' LIMIT ' + range ; execStmt(stmtElem.value);};const scroll_pag=function(direction){switch(direction){case 2: for(const i of [1,2,3]){const paginationBtn=document.getElementById('page-'+i); paginationBtn.value=document.getElementById('page-'+(i+1)).value; paginationBtn.innerText=document.getElementById('page-'+(i+1)).innerText;}const lastPaginationBtn=document.getElementById('page-4'); const limits=lastPaginationBtn.value; const frm=parseInt(limits.split(',')[0]) + 50; const to=frm + 49; lastPaginationBtn.value=frm + ',' + 50; lastPaginationBtn.innerText=frm + '-' + to; break; case 4: const firstPaginationBtn=document.getElementById('page-1'); const lowest_limits=firstPaginationBtn.value; const lower_limit=parseInt(lowest_limits.split(',')[0]); if(lower_limit <=1){}else{for(const i of [4,3,2]){const paginationBtn=document.getElementById('page-'+i); paginationBtn.value=document.getElementById('page-'+(i-1)).value; paginationBtn.innerText=document.getElementById('page-'+(i-1)).innerText;}const to=lower_limit - 1; let frm=to - 50 + 1 ; if(frm==1) frm=0; firstPaginationBtn.value=frm + ',' + 50; firstPaginationBtn.innerText=frm + '-' + to;}break; default:break;}for (const i of [1,2,3,4]) document.getElementById('page-'+i).classList.remove('active'); var lmts=localStorage.getItem('limits'); var pag_btn=document.querySelectorAll(\"button[value='\" + lmts + \"']\")[0]; pag_btn && pag_btn.classList.add('active');};";
_script += "(function(funcName, baseObj){funcName=funcName || 'docReady'; baseObj=baseObj || window; var readyList=[]; var readyFired=false; var readyEventHandlersInstalled=false; function ready(){if (!readyFired){readyFired=true; for (var i=0; i < readyList.length; i++){readyList[i].fn.call(window, readyList[i].ctx);}readyList=[];}}function readyStateChange(){if ( document.readyState==='complete' ){ready();}}baseObj[funcName]=function(callback, context){if (typeof callback !=='function'){throw new TypeError('callback for docReady(fn) must be a function');}if (readyFired){setTimeout(function(){callback(context);}, 1); return;}else{readyList.push({fn: callback, ctx: context});}if (document.readyState==='complete'){setTimeout(ready, 1);}else if (!readyEventHandlersInstalled){if (document.addEventListener){document.addEventListener('DOMContentLoaded', ready, false); window.addEventListener('load', ready, false);}else{document.attachEvent('onreadystatechange', readyStateChange); window.attachEvent('onload', ready);}readyEventHandlersInstalled=true;}}})('docReady', window);var lastTabID=localStorage.getItem('lastTabID') || 1 ;var maxTabs=6;const tabs=[];const saveTab=function(tabID){localStorage.setItem('tab'+tabID, document.getElementById('query').value);};const showTabContent=function(this_tab){saveTab(lastTabID); for (let i=1; i<=maxTabs; i++){document.querySelector(\"button[id='tab\"+ i + \"']\").classList.remove('active');}this_tab.classList.add('active'); document.getElementById('query').value=localStorage.getItem(this_tab.id); lastTabID=this_tab.id.slice(-1); localStorage.setItem('lastTabID' , lastTabID);};docReady(function(){const stmtTxtArea=document.getElementById('query'); stmtTxtArea.value=localStorage.getItem('tab'+lastTabID); document.querySelector(\"button[id='tab\" + lastTabID + \"']\").classList.add('active');console.log(`"+welcomeScreen+"`)});";
// MySQL Connection
let connection = {};
// Server
const server = {};
// Get MySQL Connection(s)
const getConnections = (connID=0) => {
  let data = fs.readFileSync('connections.json');
  data = JSON.parse(data);
  if(connID)
    data = data[connID];
  return data;
};
// Add / Update MySQL Connections
const addUpdateConnection = context => {
  const data = fs.readFileSync('connections.json');
  if(!data) {
    console.log("Failed. File 'connections.json' not found. Try running this app with Elevated Privileges.");
    context.result = "err";
    context.message = "Failed. Try Elevated Privileges. Please Check logs.";
    return context;
  }
  let connections = JSON.parse(data);
  let connectionsOld = JSON.parse(data);
  let duplicate = false;
  if(context.id > 0) {
    // Update
    // Prevent duplicate connections
    for(const [conn_id , { host, usr, connname }] of Object.entries(connections)){
      if(conn_id != context.id && host == context.host && usr == context.usr) {
        context.result = "err";
        context.message = "Failed. Connection already exists.";
        duplicate = true;
        break;
      }
      else if (conn_id != context.id && connname == context.connname){
        context.result = "err";
        context.message = "Failed. Please use a unique Connection Alias.";
        duplicate = true;
        break;
      }
    }
    if(!duplicate) {
      connections[context.id]['host'] = context.host;
      connections[context.id]['usr'] = context.usr;
      connections[context.id]['pass'] = context.pass;
      connections[context.id]['connname'] = context.connname;
    }
  }
  else{
    // Add
    let id = Object.keys(connections).length + 1;
    // Add new connection only if host, userame and alias is different.
    for({ host, usr, connname } of Object.values(connections)){
      if(host == context.host && usr == context.usr) {
        context.result = "err";
        context.message = "Failed. Connection already exists.";
        duplicate = true;
        break;
      }
      else if (connname == context.connname){
        context.result = "err";
        context.message = "Failed. Please use a unique Connection Alias.";
        duplicate = true;
        break;
      }
    }
    if(!duplicate) {
      connections[id] = {
        host : context.host,
        usr : context.usr,
        pass : context.pass,
        connname : context.connname,
        databases: {}
      };
    }
  }
  if(JSON.stringify(connections) !== JSON.stringify(connectionsOld)) {
    let ok = true;
    try{
      fs.writeFileSync(
        'connections.json',
        JSON.stringify(connections),
        function(err) {
          if(err){
            console.log(err);
            ok = false;
          }
        }
      );
    }
    catch{ ok = false; }
    if(ok){
      context.result = "ok";
      context.message = "Connection Saved Successfully";
    }else{
      context.result = "err";
      context.message = "Failed. Couldn't write to connections file.";
    }
  }
  else if(context.id > 0 && !duplicate) {
    context.result = "loading";
    context.message = "Ignored. No changes deteted.";
  }
  return context;
};
// Handler - Main App
const indexHandler = (response, callback) => {
  const resp = response.buffer;
  const allConns = getConnections();
  const context = {
    conn: resp.conn && Number(resp.conn) || 0,
    db: resp.db && resp.db.trim() || "Not Selected",
    hideEditConnection:"",
    hideMainElements: "",
    queryResultRows: [],         // Initialized in queryHandler
    queryResultFields: new Set(),// Initialized in queryHandler
    queryAreaState: "",
    databases:new Set(),
    tables:new Set(),
    messageState:`hide`,
    message:``,
    statusState: `err`,
    status: `Not connected`,
  };
  // Logic
  if (!context.conn || !Object.keys(allConns).length) {
    context.message = 'Please select or create a MySQL connection.';
    context.messageState = "err";
  } else {
    const connObj = allConns[context.conn];
    let queryResult = [];
    let ok = true;
    // MySQL Connection Object / Client
    connection = new mysqlSync({
      host : connObj.host,
      user : connObj.usr,
      password : connObj.pass,
    });
    // Get databases and Handle db connection error
    try{
      queryResult = connection.query(`SHOW DATABASES ;`);
      for(const row of queryResult)
        context.databases.add(row.Database);
    }
    catch(err) {
      err +="";
      console.log(err);
      context.messageState = "err";
      if(err.includes("getaddrinfo"))
        context.message = "Invalid Host. Please correct your MySQL Connection's host and try again!";
      else if(err.includes("ER_ACCESS_DENIED_ERROR"))
        context.message = "Access Denied. Please correct your MySQL Connection's credentials and try again!";
      else
        context.message = "Please correct your MySQL Connection's credentials and try again!";
      ok = false;
    }
    if(ok && context.databases.size){
      if (context.db == "Not Selected") {
        context.message = "Please select a Database to connect!";
        context.messageState = "loading";
      }
      else{
        connection.query(`USE ${context.db} ;`);
        queryResult = connection.query(`SELECT table_name FROM information_schema.tables WHERE table_schema = ? ;`, [context.db]);
        for(const row of queryResult)
          context.tables.add(row.table_name);
        context.statusState ="ok";
        context.status = "Connected";
        if(context.tables.size){
          context.message = "Connected successfully! Start Querying !";
          context.messageState = "ok";
        }
        else{
          context.message = "Connected successfully! But no table found in this database.";
          context.messageState = "loading";
        }
      }
    }
    else{
      ok && (context.messageState = "loading");
      ok && (context.message = "No Database Found!");
    }
  }
  if (!context.conn)
    context.hideEditConnection = 'hide';
  if (!context.conn || context.db=="Not Selected" || context.statusState.includes("err")){
    context.hideMainElements = "hide";
    context.queryAreaState = "hide";
  }
  // Prepare View
  const homeHTML = {
    misc: `<form method="POST" action="/connection" id="editForm" class="hide"><input class="hide" name="startedEditing" value="true" ><input class="hide" name="id" value="${context.conn}" ></form>`,
    header:`<header>
    <li>
    <small class="left toggleSidebar ${context.hideMainElements}">☰ Tables</small>
    <small class="left info"><span id="add" style="font-size:14px" onclick="loadConnectionForm(this.id)" class="left"><b>+ Add</b></span></small>
    <small class="left" >
    <form class="left" method="post">
    <span class="left" style="font-size: 14px;">MySQL Connection : &nbsp;</span>
    <select class="left" name="conn" id="conn" onchange="showMessage('Connecting ', 'loading'); this.form.submit()">
    <option value="0" selected> &nbsp; My Connections &nbsp;&nbsp;&nbsp;&nbsp;</option>
    ${(function(){
    let connOptionsHTML = ``;
    for (const [id, connection] of Object.entries(allConns))
    connOptionsHTML += `<option value="${id}" ${ context.conn == id && 'selected'} > &nbsp; ${connection.connname} &nbsp; </option>`;
    return connOptionsHTML;
    })()
    }
    </select>
    <small class="left"><span id="edit" style="font-size:13px" onClick="loadConnectionForm(this.id)" class="left ${context.hideEditConnection}">&nbsp; <u style="color:#aaa">edit</u> &nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small>
    &nbsp;
    <span class="left" style="font-size: 14px;">Database : &nbsp;</span>
    <select class="left" name="db" id="db" onchange="showMessage('Connecting ', 'loading'); this.form.submit()">
    <option value="Not Selected" selected> &nbsp; Select Database &nbsp;&nbsp;&nbsp;&nbsp;</option>
    ${(function(){
    if(context.databases){
    let dbOptionsHTML = ``;
    for(const db of context.databases)
    dbOptionsHTML += `<option value="${db}" ${ context.db == db && 'selected'} > &nbsp; ${db} &nbsp; </option>`;
    return dbOptionsHTML;
    }
    })()
    }
    </select>
    </form>
    </small>
    <small class="right transparentBG"><i><span data-href="https://rahulspatil.in">nodeMiniAdmin Ver 1.0.0</span></i></small>
    <small class="toggleQueryArea ${context.hideMainElements} info"> ▼ </small>
    <small class="execStmt ${context.hideMainElements} ok" > ▶ </small>
    </li>
    </header>`,
    content:`<div id="content" class="${context.hideMainElements}">
    <div id="sidebar" class="collapsed">
    ${(function (){
    let tempHTML = `<br><span class="syncTables" style="cursor: pointer;"> ↻ Refresh</span>`;
    if (context.tables){
    for (table of context.tables)
    tempHTML += `<span id="${table}" onclick="select_table(this.id)"> &nbsp; ▦ ${table}</span>`;
    }else
    tempHTML = `<br><span>No Table Found</span>`;
    return tempHTML;
    }
    )()}
    <br><br><br><br><br><br>
    </div>
    <div id="queryArea" class="${context.queryAreaState}">
    <table id="queryTabs">
    <tr>
    <td style="background:#313233; padding:0;">
    <button id="tab1" onclick="showTabContent(this)">Tab 1</button>
    <button id="tab2" onclick="showTabContent(this)">Tab 2</button>
    <button id="tab3" onclick="showTabContent(this)">Tab 3</button>
    <button id="tab4" onclick="showTabContent(this)">Tab 4</button>
    <button id="tab5" onclick="showTabContent(this)">Tab 5</button>
    <button id="tab6" onclick="showTabContent(this)">Tab 6</button>
    </td>
    <td style="background:#313233; max-width:none; padding-left:40px">
    <small><i class="tips"> Tip: Append a semicolon at the end of the your query to Format and Validate it. CTRL+Click to Execute.</i></small>
    </td>
    </tr>
    </table>
    <!--form id="fire" method="POST"-->
    <!--input name="conn" id="conn" value="${context.conn}" class="hide" hidden-->
    <textarea onkeyup="validateOnSemiColon(this.value)" onmouseup="this.onkeyup()" id="query" name="query" placeholder="Prepare MySQL Query Here..."></textarea>
    <!--/form-->
    </div>
    <!-- Result Area Where Query result is shown -->
    <div id="resultArea" class="hide">
    <table id="breadcrumbsTable">
    <tr>
    <th>
    &nbsp;<button class="exportCSV">Download CSV</button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;<button onclick="scroll_pag(4);"> < </button>
    &nbsp;<button onclick="scroll_pag(2);"> > </button>
    &nbsp;<button id="page-1" onclick="selectRange(this.value)" value="0,50">0-50</button>
    &nbsp;<button id="page-2" onclick="selectRange(this.value)" value="51,50">51-100</button>
    &nbsp;<button id="page-3" onclick="selectRange(this.value)" value="101,50">101-150</button>
    &nbsp;<button id="page-4" onclick="selectRange(this.value)" value="151,50">151-200</button>
    <small><i class="tips"> Tip: A single click on a cell inide result table copies its content to clipboard.</i></small>
    </th>
    </tr>
    </table>
    <div style="height: 10px;z-index: 77777;background: grey;width: 100%;margin-top: 26px;position: fixed;"></div>
    <table id="resultTable">
    <tbody style="margin-top:10px !important;position:absolute; margin-bottom:30px;">
    <tr>
    ${(function(){
    let tempHTML = ``;
    for (field of context.queryResultFields)
    tempHTML += `<th> ${field} </th>`;
    return tempHTML;
    }
    )()}
    </tr>
    ${(function(){
    let tempHTML = ``;
    if (context.queryResultRows){
    for (row of context.queryResultRows){
    tempHTML += `<tr>`;
    for (val of row)
    tempHTML += `<td> ${val} </td>`;
    tempHTML += `</tr>`;
    }
    }
    else
    tempHTML += `<tr><td colspan="all"> No results found. </td></tr>`;
    return tempHTML;
    })()}
    </tbody>
    </table>
    </div>
    </div>`,
    messagesArea: `<footer id="messageArea"><small id="message" class="msg ${context.messageState}">${context.message} </small></footer>`,
    footer:`<footer><li><span class="left ${context.statusState}">Status: <span> ${context.status}</span></span><span class="right">&nbsp;       </span><span class="right">© <span data-href="https://rahulspatil.in">Rahul S. Patil</span></span><span class="loading">Records: <span class="loading" id="recordsCount">0</span></span><span class="info">Query Time:  <span id="queryTime"> 0 seconds</span> </span></li></footer>`,
    script:`<script>let queryOk = false;</script><script>${_script}</script><script type="text/javascript" src="https://unpkg.com/sql-formatter@latest/dist/sql-formatter.min.js"></script>`,
  };
  const homeView = `<!DOCTYPE html><html>${head}<body> ${homeHTML.misc} ${homeHTML.header} ${homeHTML.content} ${homeHTML.messagesArea} ${homeHTML.footer} ${homeHTML.script}</body></html>`;
  // Render
  callback(200, homeView);
};
// Handler - Add & Edit MySQL Connection
const connectionsHandler = (response, callback) => {
  const resp = response.buffer;
  // Context object that holds dynamic data
  let context = {
    id:0,
    Action : 'Add',
    host:"",
    usr:"",
    pass:"",
    connname:"",
    result:"err",
    message:"",
  };
  // Add / Edit logic
  if(response.method.toLowerCase() == "post") {
    const respKeys = Object.keys(resp);
    const contextKeys = Object.keys(context);
    // Check if 'resp' object has properties 'host','usr', 'pass', 'connname' and 'id' which exist object 'context'.
    // If yes, user is already editing the connection.
    if(respKeys.every( prop => contextKeys.includes(prop))) {
      context.id = resp.id;
      if(resp.id > 0)
        context.Action = "Edit";
      context.host = resp.host;
      context.usr = resp.usr;
      context.pass = resp.pass;
      context.connname = resp.connname;
      if (context.host && context.usr && context.pass && context.connname)
        context = addUpdateConnection(context);
      else
        context.message = "Failed. All fields are required !!";
    }
    // Else, user has just started editing the connection. i.e. clicked on Edit button.
    else if(respKeys.includes("startedEditing") && respKeys.includes("id") && respKeys.length == 2){
      const conn = getConnections(resp.id);
      context.id = resp.id;
      context.Action =  'Edit';
      context.host =  conn.host;
      context.usr =  conn.usr;
      context.pass =  conn.pass;
      context.connname = conn.connname;
      context.result = "";
    }
    // Else, user has sent wrong POST parameters, may be with POSTMAN, for no reason.
    else
      // possibly redirect to "/connection"
      context.message = "BAD REQUEST !!!";
  }
  // Prepare View
  const connectionsHTML = {
    header : `<header><li> <small style="margin-top:-3px" class="left"><a href="../index">◀</a></small> <small class="right transparentBG"><i><span data-href="https://rahulspatil.in">nodeMiniAdmin Ver 1.0.0</span></i></small> </li></header>`,
    content: `<div id="connection" style="margin-left:50px;margin-top:30px;"><form id="add" method="POST"><table><tr><th colspan="2">${context.Action}ing Connection <b>${context.connname}</b></th></tr><tr><td colspan="2">&nbsp;</td></tr><tr><td><label for="host">Host:</label></td> <td><input type="text" name="host" maxlength="255" required="" id="host" value="${context.host}"></td></tr><tr><td><label for="usr">Username:</label></td> <td><input type="text" name="usr" maxlength="100" required="" id="usr" value="${context.usr}"></td></tr><tr><td><label for="pass">Password:</label></td> <td><input type="password" name="pass" maxlength="255" required="" id="pass" value="${context.pass}"></td></tr><tr><td><label for="connname">Connection Alias:</label></td> <td><input type="text" name="connname" maxlength="100" required="" id="connname" value="${context.connname}"></td></tr><tr><td colspan="2">&nbsp;</td></tr><tr><th><button id="save" value="${context.Action}">Save</button></th><th>${context.message && context.result && '<span class="msg '+context.result+'">'+context.message+'</span>' || '<span class="msg loading hide">Please wait '+'<span class="loading loader__dot">.</span>'.repeat(3)+'</span>'}</th></tr></table><!--input name="edited" value="$ {context.edited}" class="hide" hidden--><input value="${context.id}" name="id" class="hide" hidden></form></div>`,
    footer : `<footer><li><span class="right">&nbsp;</span><span class="right">© <span data-href="https://rahulspatil.in">Rahul S. Patil</span></span></li></footer>`,
    script : `<script>for(const link of document.querySelectorAll('span[data-href]')){link.addEventListener('click', function(e){ window.open(e.target.getAttribute('data-href'), '_blank');}); }document.getElementById('save').onclick = function() {const saveForm = document.getElementById("add");for(const input of saveForm.elements){input.value = input.value.trim();if(!input.value)return;}document.querySelector('.loading').classList.remove('hide'); for( input of saveForm.elements) input.readOnly = true;saveForm.submit();}</script>`,
  };
  const connectionsView = `<!DOCTYPE html><html>${head}<body>${connectionsHTML.header} ${connectionsHTML.content} ${connectionsHTML.footer} ${connectionsHTML.script}</body></html>`;
  // Render
  callback(200, connectionsView);
};
// Handler - Validate query via AJAX
const validateQuery = (response, callback) => {
  let validationResult = "";
  const resp = response.buffer;
  const _query = resp.test.replace(/(\r\n|\n|\r)/g," ").trim() || "";
  if (_query) {
    if(['SELECT' , 'INSERT' , 'DELETE' , 'REPLACE' , 'UPDATE' ].includes(_query.split(" ")[0].toUpperCase())){
      try{
        connection.query(`USE ${resp.db} ;`);
        validationResult = connection.query(`EXPLAIN ` + _query);
      }
      catch(err) {
        err +="";
        console.log(err);
        validationResult = err;
      }
    }
  }
  callback(200, JSON.stringify(validationResult));
};
// Handler - Execute query via AJAX
const queryHandler = (response, callback) => {
  const resp = response.buffer;
  const context = {
    messageState:`hide`,
    message:``,
    queryResultRows: [],
    queryResultFields: [],
    resultAreaState: 'hide',
    queryAreaState: '',
    queryTime: 0,
  };
  const _query = resp.test.replace(/(\r\n|\n|\r)/g," ").trim() || "";
  if (_query) {
    try{
      let queryResult = [];
      connection.query(`USE ${resp.db} ;`);
      // DQL
      if(['SELECT', 'SHOW'].includes(_query.split(" ")[0].toUpperCase())){
        const tic = performance.now();
        queryResult = connection.query(_query);
        context.queryTime = "" + performance.now() - tic;

        if(queryResult.length>0){
          context.message = "Query executed successfully!";
          context.messageState = "ok";
          context.resultAreaState = "";
          context.queryAreaState = "hide";
          context.queryResultFields = Object.keys(queryResult[0]);
          for (const [ , row] of Object.entries(queryResult))
            context.queryResultRows.push(row);
        }else{
          context.message = "No results found !!";
          context.messageState = "err";
        }
      }
      // Everything except DQL like DML, DDLs etc
      else{
        queryResult = connection.query(_query);
        if(typeof queryResult=="object" && Object.keys(queryResult).length){
          context.message = "Statement executed successfully!";
          context.messageState = "ok";
          context.queryResultFields = Object.keys(queryResult);
          context.queryResultRows.push(queryResult);
        }else{
          context.message = "Statement execution failed! Please check your Statement.";
          context.messageState = "err";
        }
      }
    }
    catch(err) {
      err +="";
      console.log(err);
      context.message = err;
      context.messageState = "err";
    }
  }
  callback(200, JSON.stringify(context));
};
// ROUTING | URL CONFIGURATIONS
const allowedURLs = {
  '/index': indexHandler,
  '/connection': connectionsHandler,
  '/validate': validateQuery,
  '/queryHandler': queryHandler,
};

/*:::::::::::::::::::::::::::::::::::::::   SERVER RELATED STUFF | DONT TOUCH  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
// Validate URL before routing to a handler
server.validateURL = path => {
  for (const key in allowedURLs) {
    if (allowedURLs.hasOwnProperty(key)) {
      if (path === key) {
        return path;
      }
    }
  }
  return false;
};
// HTTP Server
server.start = (request, response) => {
  // HTTP method
  const method = request.method.toLowerCase();
  // Parse the incoming request url
  const parsedUrl = url.parse(request.url, true);
  // Retrieve the pathname and query object from the parsed url
  const { pathname, query } = parsedUrl;
  // buffer to hold the request body that might come with a POST or PUT request
  let buffer = [];
  request.on('error', error => {
    console.log('Error Occurred', error);
    response.writeHead(500);
    response.end('Error occurred while processing HTTP request', error);
  });
  request.on('data', chunk => {
    buffer.push(chunk);
  });
  request.on('end', () => {
    buffer = Buffer.concat(buffer);
    // Parse buffer so as to get request body
    buffer = qs.parse(buffer.toString());
    // Prepare the request data object to pass to the handler function
    const responseData = {
      method,
      pathname,
      query,
      buffer,
    };
    // Retrieve the handler for the path
    const handler = allowedURLs[pathname];
    handler(responseData, (statusCode = 200, data = {}) => {
      response.writeHead(statusCode);
      response.end(data);
    });
  });
};
// Create and start HTTP Server Instance
const httpServer = http.createServer((request, response) => {
  const pathname = url.parse(request.url, false).pathname;
  server.validateURL(pathname) && server.start(request, response);
});
// Initialize HTTP Server
(server.init = (port = 3000) => {
  httpServer.listen(port, () => {
    console.log(`
${welcomeScreen}
nodeMiniAdmin started at port 3000.
Please navigate to http://localhost:${port}/index in your browser.`);
  });
})();
// Please use mono font in cli and <pre> in html
// Graphics : https://manytools.org/hacker-tools/ascii-banner/ font - colossal

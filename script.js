let likes=0,v1=0,v2=0,v3=0,numero=Math.floor(Math.random()*20)+1,tent=0;

function menu(op){
let a=document.getElementById("area");

if(op==1){a.innerHTML='<p id="c">Total: 0</p><button onclick="likes++,c.innerText=`Total: ${likes}`">👍 Curtir</button>'}

else if(op==2){a.innerHTML='<input id="i"><button onclick="let x=i.value;res.innerText=x>=18?`Permitido`:`Negado`;res.style.color=x>=18?`green`:`red`">Verificar</button><p id="res"></p>'}

else if(op==3){a.innerHTML='<input id="n1"><input id="n2"><select id="op"><option>+</option><option>-</option><option>*</option><option>/</option></select><button onclick="let x=+n1.value,y=+n2.value,o=op.value;resultado.innerText=`Resultado: ${o==`+`?x+y:o==`-`?x-y:o==`*`?x*y:x/y}`">Calcular</button><p id="resultado"></p>'}

else if(op==4){a.innerHTML='<input id="n1"><input id="n2"><button onclick="let m=(+n1.value+ +n2.value)/2;res.innerText=m>=7?`Aprovado`:m>=5?`Recuperação`:`Reprovado`;res.style.color=m>=7?`green`:m>=5?`orange`:`red`">Calcular</button><p id="res"></p>'}

else if(op==5){a.innerHTML='<input id="n"><button onclick="lista.innerHTML=``;for(let i=1;i<=10;i++){lista.innerHTML+=`<li>${n.value} x ${i} = ${n.value*i}</li>`}">Gerar</button><ul id="lista"></ul>'}

else if(op==6){a.innerHTML='<input id="m"><button onclick="let li=document.createElement(`li`);li.innerText=m.value;li.onclick=()=>li.style.textDecoration=`line-through`;lista.appendChild(li)">Add</button><ul id="lista"></ul>'}

else if(op==7){a.innerHTML='<input id="nome"><p id="e1"></p><input id="email"><p id="e2"></p><button onclick="e1.innerText=nome.value?``:`Nome obrigatório`;e2.innerText=email.value.includes(`@`)?``:`Email inválido`">Validar</button>'}

else if(op==8){a.innerHTML='<input id="p"><button onclick="tent++;msg.innerText=p.value>numero?`Alto`:p.value<numero?`Baixo`:`Acertou`;t.innerText=`Tentativas: ${tent}`">Tentar</button><p id="msg"></p><p id="t"></p>'}

else if(op==9){a.innerHTML='<button onclick="v1++,r.innerText=`João:${v1} Maria:${v2} Pedro:${v3}`">João</button><button onclick="v2++,r.innerText=`João:${v1} Maria:${v2} Pedro:${v3}`">Maria</button><button onclick="v3++,r.innerText=`João:${v1} Maria:${v2} Pedro:${v3}`">Pedro</button><p id="r"></p>'}

else if(op==10){a.innerHTML='<input id="n"><p id="e1"></p><input id="e"><p id="e2"></p><input id="i"><p id="e3"></p><input id="s" type="password"><p id="e4"></p><input id="c" type="password"><p id="e5"></p><button onclick="let erro=false;if(!n.value){e1.innerText=`Obrigatório`;erro=true}if(!e.value.includes(`@`)){e2.innerText=`Email inválido`;erro=true}if(i.value<18){e3.innerText=`+18`;erro=true}if(s.value.length<8){e4.innerText=`Min 8`;erro=true}if(s.value!=c.value){e5.innerText=`Senhas diferentes`;erro=true}if(!erro)ok.innerText=`Sucesso`">Cadastrar</button><p id="ok"></p>'}
}

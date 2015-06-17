var seclateral = document.querySelector('.seclateral');
var conteudo = document.querySelector('.conteudo');
var btnAdd = document.querySelector('.btnAdd');
var pesquisa = document.querySelector('#pesquisa');
window.mSeries = [];

pesquisa.addEventListener('keyup', function (e) {
    var lis = document.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
        var name = lis[i].getElementsByClassName('addlayer')[0].innerHTML.toUpperCase();

        if (name.indexOf(e.target.value.toUpperCase()) > -1) {
            lis[i].style.display = 'list-item';
        } else
            lis[i].style.display = 'none';
    }
});


conteudo.addEventListener('click', function (e) {
    var _layer = e.target.parentNode;
    switch (e.target.className) {
    case 'spanTp':
        e.target.style.display = 'none';
        _layer.querySelector('.selectsTp').style.display = 'block';

        _layer.querySelector('.selectsTp').addEventListener('change', function (e) {
            _layer.querySelector('.spanTp').innerHTML = this.value;
            _layer.querySelector('.spanTp').style.display = 'block';
            this.style.display = 'none';
        });
        break;

    case 'spanEp':

        e.target.style.display = 'none';
        _layer.querySelector('.selectsEp').style.display = 'block';
        _layer.querySelector('.selectsEp').addEventListener('change', function (e) {
            _layer.querySelector('.spanEp').innerHTML = this.value;
            _layer.querySelector('.spanEp').style.display = 'block';
            this.style.display = 'none';
        });
        break;

    case 'del':
        var string = e.target.parentNode.id.replace("p", "");
        console.log(searchId(string));
        var temp = [];
        for (var i = 0; i < window.mSeries.length; i++) {
            if (searchId(string) != i)
                temp.push(window.mSeries[i])

        }

        window.mSeries = temp;
        //POGUEADO COM SUCESSO windown.mSeries.splice(searchId(string),1);  nao tava rolando
        localStorage.setItem("series", JSON.stringify(window.mSeries));
        e.target.parentNode.outerHTML = "";

    }
});

function searchId(_id) {

    window.mSeries = JSON.parse(localStorage.getItem("series"));
    if (window.mSeries == null)
        return -1;
    else {
        for (var i = 0; i < window.mSeries.length; i++) {
            if (window.mSeries[i].id == _id)
                return i;
        }
        return -1;
    }

}


seclateral.addEventListener('click', function (e) {
    var eclass = e.target.className;
    var eid = e.target.getAttribute('id');
    var esrc = e.target.getAttribute('data-imagem-src');
    if (searchId(eid) == -1)
        addConteudo(eclass, eid, esrc, 0, 0, true);
});

function varrerlocal() {

    window.mSeries = JSON.parse(localStorage.getItem("series"));
    if (window.mSeries == null)
        window.mSeries = [];
    else {
        for (var i = 0; i < window.mSeries.length; i++) {
            console.log(window.mSeries[i].id);
            addConteudo("addlayer", window.mSeries[i].id, window.mSeries[i].src, window.mSeries[i].tp, window.mSeries[i].ep, false);
        }
    }

}



function addLocal(_id, _src, tp, ep) {
    /*var saveSerei = '{"id":"' + _id + '",' +
        '"src":"' + _src + '",' +
        '"tp":"' + tp + '",' +
        '"ep":"' + ep + '"}';*/

    var saveSerei = {
        id: _id,
        src: _src,
        tp: tp,
        ep: ep
    };
    //saveSerei = JSON.parse(saveSerei);
    //if(mSeries){
    window.mSeries = window.mSeries || [];
    window.mSeries.push(saveSerei);
    localStorage.setItem("series", JSON.stringify(window.mSeries));
    console.log('salvou');
    //} else {
    //console.log('nao existe');
    //}
}

function addConteudo(_class, _id, _src, tp, ep, local) {

    if (local) {
        addLocal(_id, _src, tp, ep);
    }

    if (_class == 'addlayer') {

        var _html = conteudo.innerHTML;


        _html += '<div id="p' + _id + '" class="layer">';
        _html += '<img src="del.png" class="del" />';
        _html += '<img src="' + _src + '" class="limg" />';
        _html += '<span class="spanTp">Temporada: 0</span>';
        _html += '<select class="selectsTp" style="display: none;">';
        _html += '<option value="Temporada: 1">Temporada 1</option>';
        _html += '<option value="Temporada: 2">Temporada 2</option>';
        _html += '<option value="Temporada: 3">Temporada 3</option>';
        _html += '<option value="Temporada: 4">Temporada 4</option>';
        _html += '<option value="Temporada: 5">Temporada 5</option>';
        _html += '<option value="Temporada: 6">Temporada 6</option>';
        _html += '<option value="Temporada: 7">Temporada 7</option>';
        _html += '<option value="Temporada: 8">Temporada 8</option>';
        _html += '<option value="Temporada: 9">Temporada 9</option>';
        _html += '<option value="Temporada: 10">Temporada 10</option>';
        _html += '</select>';
        _html += '<span class="spanEp">Episódio: 0</span>';
        _html += '<select class="selectsEp">';
        _html += '<option value="Episódio: 1">Episódio 1</option>';
        _html += '<option value="Episódio: 2">Episódio 2</option>';
        _html += '<option value="Episódio: 3">Episódio 3</option>';
        _html += '<option value="Episódio: 4">Episódio 4</option>';
        _html += '<option value="Episódio: 5">Episódio 5</option>';
        _html += '<option value="Episódio: 6">Episódio 6</option>';
        _html += '<option value="Episódio: 7">Episódio 7</option>';
        _html += '<option value="Episódio: 8">Episódio 8</option>';
        _html += '<option value="Episódio: 9">Episódio 9</option>';
        _html += '<option value="Episódio: 10">Episódio 10</option>';
        _html += '<option value="Episódio: 11">Episódio 11</option>';
        _html += '<option value="Episódio: 12">Episódio 12</option>';
        _html += '<option value="Episódio: 13">Episódio 13</option>';
        _html += '<option value="Episódio: 14">Episódio 14</option>';
        _html += '<option value="Episódio: 15">Episódio 15</option>';
        _html += '<option value="Episódio: 16">Episódio 16</option>';
        _html += '<option value="Episódio: 17">Episódio 17</option>';
        _html += '<option value="Episódio: 18">Episódio 18</option>';
        _html += '<option value="Episódio: 19">Episódio 19</option>';
        _html += '<option value="Episódio: 20">Episódio 20</option>';
        _html += '</select>';
        _html += '</div>';

        conteudo.innerHTML = _html;
        
        
    }

}

var i = 1;
loadXMLDoc(i);
var obj;
varrerlocal();

function loadXMLDoc(value) {
    var xmlhttp;
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            obj = JSON.parse(xmlhttp.responseText);
            createDom();

        }
    }
    xmlhttp.open("GET", "banco/" + value, true);
    xmlhttp.send();
}

function createDom() {

    for (j = 0; j < obj.length; j++) {
        addlista(obj[j].title, obj[j]._id, obj[j].images.poster);


    }
    while (i < 17) {
        loadXMLDoc(i++);
    }



}


function addlista(value, id, src) {
    var lis = document.getElementsByTagName('li');
    var contem = true;

    for (var i = 0; i < lis.length; i++) {
        var name = lis[i].getElementsByClassName('addlayer')[0].innerHTML;

        if (lis[i].id == id) {
            contem = false;
            break;
        }
    }

    if (contem) {
        var li = document.createElement('li');
        li.setAttribute('class', 'addlayer');
        li.setAttribute('data-imagem-src', src);
        li.setAttribute('id', id);

        var a = document.createElement('a');
        a.setAttribute('class', 'addlayer');
        a.setAttribute('data-imagem-src', src);
        a.setAttribute('id', id);
        a.innerHTML = value;
        li.appendChild(a);

        var lista = document.getElementById("list");

        lista.appendChild(li);
    }
}
const getButton = document.getElementsByClassName('all-btn');

let count = 0;
let count2 = 8;
let count3 = 0;

for(const btn of getButton){
    btn.addEventListener('click', function(e){
        count += 1;
        count2 -= 1;

        const getSeat = document.getElementById('total-seat');
        getSeat.innerText = count2;
        const getBookSeat = document.getElementById('book-seat');
        getBookSeat.innerText = count;

        if(getBookSeat.innerText >= 4){
            btn.setAttribute('disabled', '');
        }

        const seatName = e.target.innerText;
        
        const tr = document.createElement('tr');

        const td = document.createElement('td');
        td.innerText = seatName;
        const td2 = document.createElement('td');
        td2.innerText = 'Economy'
        const td3 = document.createElement('td');
        td3.innerText = '550'

        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);

        const getTable = document.getElementById('table-body');
        getTable.appendChild(tr);

        const getTotalPrice = document.getElementById('total-price');
        count3 = count3 + 550;
        getTotalPrice.innerText = count3;
    })
}
var mini = true;

function toggleSidebar() {
  if (mini) {
    console.log("opening sidebar");
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    this.mini = false;
  } else {
    console.log("closing sidebar");
    document.getElementById("mySidebar").style.width = "85px";
    document.getElementById("main").style.marginLeft = "85px";
    this.mini = true;
  }
}

htmlDataFrom = `<div class="container">
<form action="">
    <h1 class="mainheading">Payment Form</h1><hr>
    <p>Required Fields are followed by * </p>
    <h2>Contact Information</h2>
    <p>Name: *<input type="text" name="name" placeholder="Nirav Ashvinbhai Patel" required></p>
    <fieldset> 
        <legend>Gender *</legend>
        <p>
            Male <input type="radio" name="gender" id="Male" required>
            Female <input type="radio" name="gender" id="Female" required>
        </p>
    </fieldset> 
    <p>Adress: <textarea name="adress" id="adress" cols="100" placeholder="Enter your address" rows="5"></textarea></p>
    <p>Email: *<input type="email" name="email" id="email" placeholder="xyz@gmail.com" required></p>
    <p>Pincode: *<input type="number" name="pincode" id="pincode" placeholder="123456" required></p>
    <h2>Payment Information</h2>
    <p>Card Type:
        *<select name="card_type" id="card_type" required>
            <option value="">--Select Card Type--</option>
            <option value="Rupay">Rupay</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
        </select>
    </p>
    <p>Card Number:
        *<input type="number" name="Cardnumber" id="cardnumber" placeholder="1234 5678 9000" required>
    </p>
    <p>
        Expiration Date: *<input type="date" name="exp_date" id="exp_date" required>
    </p>
    <p>
        CVV: *<input type="password" name="cvv" id="cvv" placeholder="123" required>
    </p>
    <input type="submit" value="Pay Now" name="Pay now" id="Pay Now" class="subm">
</form>
</div>`
const submitBtn = document.getElementById('submit')
const listData = document.getElementById('schema_type')
const divForm = document.getElementById('new-form')

submitBtn.addEventListener('click',()=>{

    htmlData = '<p>NOT SELECTED DATA</p>'

    if(listData.value === 'f1'){
        htmlData = '<p>Form 1</p>'
    }
    else if(listData.value === 'Schema10'){
        htmlData = htmlDataFrom
    }
    else if(listData.value === 'f3'){
        htmlData = '<p>Form 3</p>'
    }
    else if(listData.value === 'f4'){
        htmlData = '<p>Form 4</p>'
    }
    divForm.innerHTML = ''
    divForm.insertAdjacentHTML( 'beforeend', htmlData )

})
function calculateAge() {
    let birthdate = document.getElementById('birthdate').value;
    
    if (birthdate === "") {
        document.getElementById('result').innerHTML = "يرجى إدخال تاريخ الميلاد.";
        return;
    }

    let today = new Date();
    let birthDate = new Date(birthdate);
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById('result').innerHTML = 
        "عمرك: " + ageYears + " سنة، " + ageMonths + " شهر، و " + ageDays + " يوم.";

    // الحصول على اليوم الموافق لتاريخ الميلاد
    let daysOfWeek = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    let birthDay = birthDate.getDay();
    let dayName = daysOfWeek[birthDay];

    document.getElementById('dayOfWeek').innerHTML = "لقد وُلدت في يوم: " + dayName;
}

function resetCalculator() {
    document.getElementById('birthdate').value = "";
    document.getElementById('result').innerHTML = "";
    document.getElementById('dayOfWeek').innerHTML = "";
}

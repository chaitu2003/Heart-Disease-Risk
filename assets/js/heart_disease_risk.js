function cal(event){

    event.preventDefault()

            var age = parseInt(document.getElementById('age').value);
            var gender = document.querySelector('input[name="gender"]:checked').getAttribute('value');
            var cholesterol = parseInt(document.getElementById('cholesterol').value);
            var smoke = document.querySelector('input[name="smoke"]:checked').getAttribute('value');

            if(isNaN(age) || isNaN(cholesterol) || age<=0 || cholesterol<0 ){
                alert("Enter valid values");
                return;
            }

            console.log(age,gender,cholesterol,smoke);

            let final_score = 0;
            let risk_factor= "";
            let advice = "";

            if (age < 35) final_score += 0;
            else if (age >= 35 && age <= 44) final_score += 1;
            else if (age >= 45 && age <= 54) final_score += 2;
            else if (age >= 55 && age <= 64) final_score += 3;
            else if (age > 65) final_score += 4;

            if (gender === 'male') final_score += 1;
            else if(gender === 'female') final_score += 2;

            if (cholesterol < 200) final_score += 0;
            else if (cholesterol >= 200 && cholesterol <= 239) final_score += 1;
            else if (cholesterol > 239) final_score += 2;

            if (smoke === 'smoker') final_score += 2;

            if (final_score <= 2) {
                risk_factor = "Low Risk";
                advice = "Your heart health is currently good. Keep it up with regular exercise, a balanced diet, and routine checkups.";
            } 
            else if (final_score <= 5) {
                risk_factor = "Moderate Risk";
                advice = "You may be at some risk. It's a good time to improve your lifestyle – eat heart-friendly foods, exercise regularly, and consult a doctor for a check-up.";
            } 
            else if(final_score >= 6) {
                risk_factor = "High Risk";
                advice = "You are at high risk of heart disease. Please consult a healthcare professional immediately. Changes in diet, physical activity, and possibly medication may be required.";
            } 

            const results = document.getElementById('result');
            results.innerHTML = `Your score is <strong> ${final_score} </strong> and risk factor is <strong> ${risk_factor} </strong> <br> <strong>Health Advice:</strong> ${advice}`;
}

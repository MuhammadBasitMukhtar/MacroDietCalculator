$(document).ready(function(){
 M = $(".macro-results"), k = $("#macro-calculator-form"), e = $('input[name="unit"]:checked').val(), $(".weight, .height").attr("data-unit", e), $('input[name="unit"]').on("change", function() {
                e = $(this).val(), $(".weight, .height").attr("data-unit", e)
            }), k.on("submit", function(e) {
                e.preventDefault();
                /*var url = 'https://script.google.com/macros/s/AKfycbxOYh1HKZeR2TaQ9DaC8mtoIbmIrUv_J0_QTzkiAQjO2tR2zOQ-/exec'
                var jqxhr = $.ajax({
                    url: url,
                    method: "GET",
                    dataType: "json",
                    data: k.serialize()
                });*/
                var t = !1,
                    a = $(this),
                    n = a.find('input[name="gender"]:checked').val(),
                    r = a.find("input#birthday"),
                    i = parseInt(r.val()),
                    email = a.find("input#Email").val(),
                    name = a.find("input#Name").val(),
                    s = a.find('input[name="unit"]:checked').val(),
                    o = a.find("input#weight-lbs"),
                    u = a.find("input#weight-kg"),
                    uval = parseInt(u.val());
                    uvalbs = uval * 2.20462;
                    l = a.find("input#height-ft"),
                    c = a.find("input#height-in"),
                    d = a.find("input#height-cm"),
                    name = a.find("input#Name").val(),
                    email = a.find("input#Email").val(),
                    dval = parseInt(d.val()),
                    mealtimes = parseInt(a.find('input[name="meals"]:checked').val()),
                    wakeuptime = (a.find("#WTime").val());

                    gto = 0,// a.find("input#GoalTo").val(),
                    h = "",
                    f = "",
                    p = "",
                    g = 0;
                i != i || i < 1 ? (r.parent(".bday").addClass("error"), t = !0) : r.parent(".bday").removeClass("error"), "imperial" == s ? (h = parseInt(o.val()), h = parseInt(h / 2.20462), f = l.val(), p = c.val(), g = parseInt(12 * f) + parseInt(p), g = parseInt(30.48 * g / 12), h != h || h < 1 || isNaN(h) || "" == h ? (o.parent("label").addClass("error"), t = !0) : o.parent("label").removeClass("error"), f != f || f < 1 || isNaN(f) || "" == f ? (l.parent("label").addClass("error"), t = !0) : l.parent("label").removeClass("error"), p != p || p < 0 || isNaN(p) || "" == p ? (c.parent("label").addClass("error"), t = !0) : c.parent("label").removeClass("error")) : "metric" == s && (h = parseInt(u.val()), g = parseInt(d.val()), h != h || h < 1 || isNaN(h) || "" == h ? (u.parent("label").addClass("error"), t = !0) : u.parent("label").removeClass("error"), g != g || g < 1 || isNaN(g) || "" == g ? (d.parent("label").addClass("error"), t = !0) : d.parent("label").removeClass("error"));
                var m = 2.20462 * h,
                    v = ("female" == n ? 10 * h + 6.25 * g - 5 * i - 161 : 10 * h + 6.25 * g - 5 * i + 5) * parseFloat(a.find('input[name="activity"]:checked').val());
                
                if(s == "imperial")
                {
                    weightkg = o.val() / 2.20462;
                    heightcm = (c.val() * 2.54) + (l.val() * 30.48);
                    displayheight = l.val() + "ft " +c.val()+"In";
                    displayweight = o.val() + "lbs";
                }
                else
                {
                    weightkg = uval;
                    heightcm = dval;
                    displayheight = dval + "cm";
                    displayweight = weightkg.toFixed(2) + "kg";
                }
                switch(n){
                    case "female":
                        BMRR = ((10 * weightkg) + (6.25 * heightcm) - (5 * parseInt(i)) - 161); 
                        BMRR = BMRR.toFixed(2);
                        BMR = ((10 * weightkg) + (6.25 * heightcm) - (5 * parseInt(i)) - 161) * parseFloat(a.find('input[name="activity"]:checked').val()); 
                        TDEE = BMR.toFixed(2);
                        break;
                    case "male":
                        BMRR = ((10 * weightkg) + (6.25 * heightcm) - (5 * parseInt(i)) + 5);
                        BMRR = BMRR.toFixed(2);
                        BMR = ((10 * weightkg) + (6.25 * heightcm) - (5 * parseInt(i)) + 5) * parseFloat(a.find('input[name="activity"]:checked').val());
                        TDEE = BMR.toFixed(2)
                        break;
                }
                /*if(n == "female"){
                    BMRR = ((10 * weightkg) + (6.25 * heightcm) - (5 * parseInt(i)) - 161); 
                    BMRR = BMRR.toFixed(2);
                    BMR = ((10 * weightkg) + (6.25 * heightcm) - (5 * parseInt(i)) - 161) * parseFloat(a.find('input[name="activity"]:checked').val()); 
                    TDEE = BMR = ((10 * weightkg) + (6.25 * heightcm) - (5 * parseInt(i)) + 5) * parseFloat(a.find('input[name="activity"]:checked').val());
                }
                else if(n == "male")
                {
                    BMRR = ((10 * weightkg) + (6.25 * heightcm) - (5 * parseInt(i)) + 5);
                    BMRR = BMRR.toFixed(2);
                    BMR = ((10 * weightkg) + (6.25 * heightcm) - (5 * parseInt(i)) + 5) * parseFloat(a.find('input[name="activity"]:checked').val());
                    TDEE = BMR = ((10 * weightkg) + (6.25 * heightcm) - (5 * parseInt(i)) + 5) * parseFloat(a.find('input[name="activity"]:checked').val());
                }*/
                switch (a.find('input[name="goal"]:checked').val()) {
                    case "lose":
                        displaygoal = "Lose Weight"; 
                        BMR = BMR - 500;
                        //BMR = BMR.toFixed(2);
                        BMR = Math.abs(BMR);    
                        fat = BMR / 9,protein = BMR / 4, carbs = BMR / 4;
                        pr = protein * .36;
                        cr = carbs * .37;
                        fr = fat * .27;
                        break;
                    case "gain":
                        displaygoal = "Gain Weight";
                        BMR = BMR + 500;
                        //BMR = BMR.toFixed(2);        
                        fat = BMR / 9,protein = BMR / 4, carbs = BMR / 4;
                        pr = protein * .363;
                        cr = carbs * .333;
                        fr = fat * .303;
                        break;
                    case "both":
                        displaygoal = "Tone Up";
                        //BMR = BMR.toFixed(2);
                        fat = BMR / 9,protein = BMR / 4, carbs = BMR / 4;
                        pr = protein * .40;
                        cr = carbs * .40;
                        fr = fat * .20;
                        break;
                }
                var w = Math.round(10 * pr) / 10,
                    C = Math.round(10 * fr) / 10,
                    y = Math.round(10 * cr) / 10,
                    I = Math.round(BMR);
                 /*   
                //var wakeuptime = $("#WTime").val().split(':');
                var wakeuptime = $("#WTime option:selected").val().split(':');
                whours = parseInt(wakeuptime[0])
                wmins = parseInt(wakeuptime[1]) + 30;
                //var bedtime = $("#BTime").val().split(':');
                var bedtime = $("#BTime option:selected").val().split(':');
                bhours = parseInt(bedtime[0]) - 1;
                bmins = parseInt(bedtime[1]) - 30;
                //var trainingtime = $("#TTime").val().split(':');
                var trainingtime = $("#TTime option:selected").val().split(':');
                thours = parseInt(trainingtime[0]);
                tmins = parseInt(trainingtime[1]);
                bthours = parseInt(trainingtime[0]) - 1;
                btmins = parseInt(trainingtime[1]) - 30;
                athours = parseInt(trainingtime[0]) + 1;
                atmins = parseInt(trainingtime[1]) + 30;
                
                if(wmins > 59)
                {
                    wmins -= 60;
                    if(wmins < 10)
                    {
                    wmins = "0" + wmins;
                    }
                    whours += 1;
                }
                if(tmins < 10)
                {
                    tmins = "0" + tmins;
                }
                if(atmins > 59)
                {
                    atmins -= 60;
                    if(atmins < 10)
                    {
                    atmins = "0" + atmins;
                    }
                    athours += 1;
                }
                if(btmins < 30)
                {
                    btmins += 60;
                    if(btmins < 10)
                    {
                    btmins = "0" + btmins;
                    }
                    bthours -= 1;
                }
                if(bmins < 30)
                {
                    bmins += 60;
                    if(bmins < 10)
                    {
                    bmins = "0" + bmins;
                    }
                    bhours -= 1;
                }   
                if(bmins > 59)
                {
                    bmins -= 60;
                    if(bmins < 10)
                    {
                    bmins = "0" + bmins;
                    }
                    bhours += 1;
                }
               var fmtime = whours + ":" + wmins;
                var lmtime = bhours + ":" + bmins;
                var bttime = bthours + ":" + btmins;
                var attime = athours + ":" + atmins;
                
                var wtdif = thours - whours;
                var btdif = bhours - thours;
                if(wtdif > btdif)
                {
                    hrs = Math.round(wtdif / 3);
                    bt1time = (hrs + whours) + ":" + "00";
                    bt2time = ((hrs * 2) + whours) + ":" + "00";
                }
                else
                {
                    hrs = Math.round(btdif / 3);
                    bt1time = (hrs + thours) + ":" + "00";
                    bt2time = ((hrs * 2) + thours) + ":" + "00";
                }

               if((wtdif ==  btdif)||(wtdif > (0.85 * btdif))||(wtdif < (0.85 * btdif)))
                {
                    hrs = Math.floor(wtdif / 3);
                    bt1time = (hrs + whours) + ":" + "00";
                    bt2time = (thours - Math.floor(hrs * 1.5)) + ":" + "00";
                var bt3time = (thours + Math.floor(hrs * 1.5)) + ":" + "00";
                //var at1time = (bhours - 1) + ":" + "30";
                var at1time = (thours + Math.round(hrs * 2)) + ":" + "30";
                }
                else if((wtdif == (btdif * 2)) || (wtdif > (btdif * 2)))
                {
                    hrs = Math.round(wtdif / 4);
                    bt1time = bttime + ":" + "00";//(hrs + whours) + ":" + "00";
                    bt2time = attime + ":" + "00";//((hrs * 2) + whours) + ":" + "00";
                    bt3time = (thours - (hrs * 3)) + ":" + "00";
                    at1time = ((btdif / 2) + thours) + ":" + "00";
                }
                else
                {
                    hrs = Math.round(btdif / 4);
                    bt1time = (hrs + thours) + ":" + "00";
                    bt2time = (((whours - wthours) / 2) + whours) + ":" + "00";//((hrs * 2) + thours) + ":" + "00";
                    bt3time = ((hrs * 3) + thours) + ":" + "00";
                    at1time = ((btdif / 2) + thours) + ":" + "00";
                 }

                /* if((thours - whours) <= 4)
                 {
                    switch(mealtimes)
                    {
                        case 4:
                            bttime = attime;
                            attime = Math.floor((bhours + athours) / 2) + ":" + atmins;
                            break;
                        case 5:
                            bt1time = attime;
                            bt2time = Math.floor(athours + ((bhours - athours) / 3)) + ":" + atmins;
                            attime = Math.floor(athours + (((bhours - athours) / 3) * 2)) + ":" + atmins;
                            break;
                        case 6:
                            bt1time = (thours + 1) + ":" + tmins;
                            bt2time = Math.round((thours + 1)+((bhours - (thours + 1)) / 4)) + ":" + atmins;
                            bt3time = Math.floor((thours + 1)+(((bhours - (thours + 1)) / 4) * 2)) + ":" + atmins;
                            at1time = Math.floor((thours + 1)+(((bhours - (thours + 1)) / 4) * 3)) + ":" + atmins;
                            //at1time = Math.floor((thours + 1)+(((bhours - (thours + 1)) / 4) * 4)) + ":" + atmins;
                            break;
                    }
                 }*/
                 uvalbs = weightkg * 2.20462;
                 uvalbs = uvalbs.toFixed(2);
                
                var data = "<table><tr><td style='color: #111'>Name: "+ name +"</td><td>BMR: "+BMRR +",   TDEE: "+TDEE+"</td></tr><tr><td>  Weight: "+ displayweight +",   Height: "+displayheight+"</td><td> Goal: "+displaygoal +"</td></tr></table>"
                $(".userdetail").html(data);
                 switch(mealtimes)
                 {
                     case 4:
                         switch(parseInt(a.find('input[name="mealsbt"]:checked').val()))
                         {
                            case 1:
                                m1 = "<div class='results-meals-1'><p>Meal #1 : 1st in Morning</p></div>";
                                m2 = "<div class='results-meals-1'><p>Meal #2 : 30min-1hr After Workout</p></div>";
                                m3 = "<div class='results-meals-1'><p>Meal #3 : 4hrs After Last Meal</p></div>";
                                m4 = "<div class='results-meals-1'><p>Meal #4 : 5hrs After Last Meal</p></div>";
                                datameal =m1 + m2 + m3 + m4;
                            break;
                            case 2:
                                m1 = "<div class='results-meals-1'><p>Meal #1 : 1st in Morning</p></div>";
                                m2 = "<div class='results-meals-1'><p>Meal #2 : 1-3hrs before training</p></div>";
                                m3 = "<div class='results-meals-1'><p>Meal #3 : 30min-1hr after workout</p></div>";
                                m4 = "<div class='results-meals-1'><p>Meal #4 : 5hrs after last meal</p></div>";
                                datameal =m1 + m2 + m3 + m4;
                            break;
                            case 3:
                                m1 = "<div class='results-meals-1'><p>Meal #1 : 1st Thing in Morning</p></div>";
                                m2 = "<div class='results-meals-1'><p>Meal #2 : 4hrs after last meal</p></div>";
                                m3 = "<div class='results-meals-1'><p>Meal #3 : 1-3hrs before training</p></div>";
                                m4 = "<div class='results-meals-1'><p>Meal #4 : 30min-1hr after workout</p></div>";
                                datameal =m1 + m2 + m3 + m4;
                            break;
                         }
                         break;
                     case 5:
                        switch(parseInt(a.find('input[name="mealsbt"]:checked').val()))
                        {
                           case 1:
                                m1 = "<div class='results-meals-1'><p>Meal #1 : 1st Thing in Morning</p></div>";
                                m2 = "<div class='results-meals-1'><p>Meal #2 : 30min-1hr after workout</p></div>";
                                m3 = "<div class='results-meals-1'><p>Meal #3 : 4hrs after last meal</p></div>";
                                m4 = "<div class='results-meals-1'><p>Meal #4 : 4hrs after last meal</p></div>";
                                m5 = "<div class='results-meals-1'><p>Meal #5 : 1-3hrs Before bed</p></div>";
                                datameal =m1 + m2 + m3 + m4 + m5;
                           break;
                           case 2:
                                m1 = "<div class='results-meals-1'><p>Meal #1 : 1st Thing in Morning</td></tr>";
                                m2 = "<div class='results-meals-1'><p>Meal #2 : 1-3hrs before training</td></tr>";
                                m3 = "<div class='results-meals-1'><p>Meal #3 : 30min-1hr after workout</td></tr>";
                                m4 = "<div class='results-meals-1'><p>Meal #4 : 4hrs after last meal</td></tr>";
                                m5 = "<div class='results-meals-1'><p>Meal #5 : 1-3hrs Before bed</td></tr>";
                                datameal =m1 + m2 + m3 + m4 + m5;
                           break;
                           case 3:
                                m1 = "<div class='results-meals-1'><p>Meal #1 : 1st Thing in Morning</p></div>";
                                m2 = "<div class='results-meals-1'><p>Meal #2 : 3hrs after last meal</p></div>";
                                m3 = "<div class='results-meals-1'><p>Meal #3 : 1-3hrs before training</p></div>";
                                m4 = "<div class='results-meals-1'><p>Meal #4 : 30min-1hr after workout</p></div>";
                                m5 = "<div class='results-meals-1'><p>Meal #5 : 1-3hrs Before bed</p></div>";
                                datameal =m1 + m2 + m3 + m4 + m5;
                           break;
                           case 4:
                                m1 = "<div class='results-meals-1'><p>Meal #1 : 1st Thing in Morning</p></div>";
                                m2 = "<div class='results-meals-1'><p>Meal #2 : 2-3hrs after 1st intake</p></div>";
                                m3 = "<div class='results-meals-1'><p>Meal #3 : 3hrs after last meal</p></div>";
                                m4 = "<div class='results-meals-1'><p>Meal #4 : 1-3hrs before training</p></div>";
                                m5 = "<div class='results-meals-1'><p>Meal #5 : 1-3hrs Before bed</p></div>";
                                datameal =m1 + m2 + m3 + m4 + m5;
                           break;
                        }
                         break;
                     case 6:
                        switch(parseInt(a.find('input[name="mealsbt"]:checked').val()))
                        {
                           case 1:
                                m1 = "<div class='results-meals-1'><p>Meal #1 : 1st Thing in Morning</p></div>";
                                m2 = "<div class='results-meals-1'><p>Meal #2 : 30min-1hr after workout</p></div>";
                                m3 = "<div class='results-meals-1'><p>Meal #3 : 2-3hrs after last meal</p></div>";
                                m4 = "<div class='results-meals-1'><p>Meal #4 : 3hrs after last meal</p></div>";
                                m5 = "<div class='results-meals-1'><p>Meal #5 : 3hrs after last meal</p></div>";
                                m6 = "<div class='results-meals-1'><p>Meal #6 : 1-3hrs Before bed</p></div>";
                                datameal =m1 + m2 + m3 + m4 + m5 + m6;
                           break;
                           case 2:
                                m1 = "<div class='results-meals-1'><p>Meal #1 : 1st Thing in Morning</p></div>";
                                m2 = "<div class='results-meals-1'><p>Meal #2 : 1-3hrs before training</p></div>";
                                m3 = "<div class='results-meals-1'><p>Meal #3 : 30min-1hr after workout</p></div>";
                                m4 = "<div class='results-meals-1'><p>Meal #4 : 3hrs after last meal</p></div>";
                                m5 = "<div class='results-meals-1'><p>Meal #5 : 3-4hrs after last meal</p></div>";
                                m6 = "<div class='results-meals-1'><p>Meal #6 : 1-3hrs before bed</p></div>";
                                datameal = m1 + m2 + m3 + m4 + m5 + m6;
                           break;
                           case 3:
                                m1 = "<div class='results-meals-1'><p>Meal #1 : 1st Thing in Morning</p></div>";
                                m2 = "<div class='results-meals-1'><p>Meal #2 : 2-3hrs after 1st intake</p></div>";
                                m3 = "<div class='results-meals-1'><p>Meal #3 : 1-3hrs before training</p></div>";
                                m4 = "<div class='results-meals-1'><p>Meal #4 : 30min-1hr after workout</p></div>";
                                m5 = "<div class='results-meals-1'><p>Meal #5 : 3hrs after last meal</p></div>";
                                m6 = "<div class='results-meals-1'><p>Meal #6 : 1-3hrs Before bed</p></div>";
                                datameal =m1 + m2 + m3 + m4 + m5 + m6;
                           break;
                           case 4:
                                m1 = "<div class='results-meals-1'><p>Meal #1 : 1st Thing in Morning</p></div>";
                                m2 = "<div class='results-meals-1'><p>Meal #2 : 2-3hrs after 1st intake</p></div>";
                                m3 = "<div class='results-meals-1'><p>Meal #3 : 3hrs after last meal</p></div>";
                                m4 = "<div class='results-meals-1'><p>Meal #4 : 1-3hrs before training</p></div>";
                                m5 = "<div class='results-meals-1'><p>Meal #5 : 30min-1hr after workout</p></div>";
                                m6 = "<div class='results-meals-1'><p>Meal #6 : 1-3hrs Before bed</p></div>";
                                datameal =m1 + m2 + m3 + m4 + m5 + m6;
                           break;
                           case 5:
                                m1 = "<div class='results-meals-1'><p>Meal #1 : 1st Thing in Morning</p></div>";
                                m2 = "<div class='results-meals-1'><p>Meal #2 : 2-3hrs after 1st intake</p></div>";
                                m3 = "<div class='results-meals-1'><p>Meal #3 : 3hrs after last meal</p></div>";
                                m4 = "<div class='results-meals-1'><p>Meal #4 : 3hrs after last meal</p></div>";
                                m5 = "<div class='results-meals-1'><p>Meal #5 : 1-3hrs before training</p></div>";
                                m6 = "<div class='results-meals-1'><p>Meal #6 : 1-3hrs Before bed</p></div>";
                                datameal =m1 + m2 + m3 + m4 + m5 + m6;
                           break;
                        }
                         break;
                 }

                   
                $(".mealdetail").html("<div class='results-meals'>"+datameal+"</div>");
                
                switch (mealtimes)
                {
                    case 4:
                         pr4 = (pr * .30).toFixed(2);
                         p4 = (pr * .30);
                         pr1 = (pr * .23333).toFixed(2);
                         p1 = (pr * .23333);
                         pr2 = (pr * .23333).toFixed(2);
                         p2 = (pr * .23333);
                         pr3 = (pr * .23333).toFixed(2);
                         p3 = (pr * .23333);
                        
                    var CaAt = cr * .35;
                    var CaBt = cr * .25;
                    var CaFT = cr * .20;
                        fr1 = fr * .3;
                        fr4 = fr * .3;
                        fr = fr - (fr1 + fr4);
                        fr2 = fr * .50;
                        fr3 = fr * .50;
                        if (CaAt > 60)
                        {
                          ECaAtCal = ((Math.abs(CaAt - 60)) * 4) / 9;
                          fr3 = fr3 + ECaAtCal;
                          CaAt = 60;
                        }
                        if (CaBt > 60)
                        {
                          ECaBtCal = ((Math.abs(CaBt - 60)) * 4) / 9;
                          fr2 = fr2 + ECaBtCal;
                          CaBt = 60;
                        }
                        if (CaFT > 60)
                        {
                        
                          ECaFtCal = ((Math.abs(CaFT - 60)) * 4) / 9;
                          fr1 = fr1 + ECaFtCal;
                          fr4 = fr4 + ECaFtCal;
                          CaFT = 60;
                        }
                        switch(parseInt(a.find('input[name="mealsbt"]:checked').val()))
                        {
                            case 1:
                                Ca1 = CaBt;
                                Ca2 = CaAt;
                                Ca3 = CaFT;
                                Ca4 = CaFT; 
                                break;
                            case 2:
                                Ca1 = CaFT;
                                Ca2 = CaBt;
                                Ca3 = CaAt;
                                Ca4 = CaFT; 
                                break;
                            case 3:
                                Ca1 = CaFT;
                                Ca2 = CaFT;
                                Ca3 = CaBt;
                                Ca4 = CaAt; 
                                break;
                        }
                        meal1cal = ((pr1 * 4) + (fr1 * 9) + (CaFT * 4)).toFixed(2);
                        m1cal = ((pr1 * 4) + (fr1 * 9) + (CaFT * 4));
                        meal2cal = ((pr2 * 4) + (fr2 * 9) + (CaBt * 4)).toFixed(2);  
                        m2cal = ((pr2 * 4) + (fr2 * 9) + (CaBt * 4));    
                        meal3cal = ((pr3 * 4) + (fr3 * 9) + (CaAt * 4)).toFixed(2);   
                        m3cal = ((pr3 * 4) + (fr3 * 9) + (CaAt * 4));   
                        meal4cal = ((pr4 * 4) + (fr4 * 9) + (CaFT * 4)).toFixed(2);   
                        m4cal = ((pr4 * 4) + (fr4 * 9) + (CaFT * 4));   
                        var totalproteingm = parseFloat((p1 + p2 + p3 + p4)).toFixed(2);
                        var totalfatgm = parseFloat((fr1 + fr2 + fr3 + fr4)).toFixed(2);
                        var totalcarbsgm = parseFloat((CaFT + CaFT + CaBt + CaAt)).toFixed(2);
                        var totalcal = parseFloat((m1cal + m2cal + m3cal + m4cal)).toFixed(2); 
                        ctp = parseFloat((p1 + p2 + p3 + p4) * 4) ;
                        ctf = parseFloat((fr1 + fr2 + fr3 + fr4) * 9);
                        ctc = parseFloat((CaFT + CaFT + CaBt + CaAt) * 4);
                        tca = parseFloat((m1cal + m2cal + m3cal + m4cal));
                        PercentProtein = ((ctp * 100) / tca).toFixed(2);
                        PercentCarbs = ((ctc * 100) / tca).toFixed(2);
                        PercentFats = ((ctf * 100) / tca).toFixed(2);
                        PercentCalories = ((tca * 100) / tca).toFixed(2); 
                        
                        var data1 = "<tr> <td style='color: #111'>Meal # 1</td><td style='color: #1B8CFF'>"+pr1+"<span class='small-g'>g</span></td> <td style='color: #00003F'>"+Ca1.toFixed(2)+ "<span class='small-g'>g</span></td> <td style='color: #E06F00'>"+fr1.toFixed(2)+"<span class='small-g'>g</span></td> <td style='text-align: center;'>"+meal1cal+"</td> </tr>";
						
                        var data2 = "<tr class='table-info'> <td style='color: #111'>Meal # 2</td><td style='color: #1B8CFF'>"+pr2+"<span class='small-g'>g</span></td> <td style='color: #00003F'>"+Ca2.toFixed(2)+"<span class='small-g'>g</span></td> <td style='color: #E06F00'>"+fr2.toFixed(2)+"<span class='small-g'>g</span</td> <td style='text-align: center;'>"+meal2cal+"</td></tr>";
						
                        var data3 = "<tr> <td style='color: #111'>Meal # 3</td><td style='color: #1B8CFF'>"+pr3+"<span class='small-g'>g</span></td> <td style='color: #00003F'>"+Ca3.toFixed(2)+"<span class='small-g'>g</span></td> <td style='color: #E06F00'>"+fr3.toFixed(2)+"<span class='small-g'>g</span></td><td style='text-align: center;'>"+meal3cal+"</td> </tr>";
						
                        var data4 = "<tr class='table-info'> <td style='color: #111'>Meal # 4</td><td style='color: #1B8CFF'>"+ pr4 +"<span class='small-g'>g</span></td> <td style='color: #00003F'>"+Ca4.toFixed(2)+"<span class='small-g'>g</span></td> <td style='color: #E06F00'>"+fr4.toFixed(2)+"<span class='small-g'>g</span></td><td style='text-align: center;'>"+meal4cal+"</td> </tr>";
                        var data5 = "<tr> <td style='color: #111;'>Totals</td><td style='color: #1B8CFF'>"+ totalproteingm +"<span class='small-g'>g</span</td> <td style='color: #00003F'>"+totalcarbsgm+"<span class='small-g'>g</span></td> <td style='color: #E06F00'>"+totalfatgm+"<span class='small-g'>g</span></td><td style='text-align: center;'>"+totalcal+"</td> </tr>";
                    
                        $(".tablemeal").html(data1+data2+data3+data4+data5);
                        break; 
                    case 5:
                        pr5 = (pr * .24).toFixed(2);
                        p5 = (pr * .24);
                        pr1 = (pr * .19).toFixed(2);
                        p1 = (pr * .19);
                        pr2 = (pr * .19).toFixed(2);
                        p2 = (pr * .19);
                        pr3 = (pr * .19).toFixed(2);
                        p3 = (pr * .19);
                        pr4 = (pr * .19).toFixed(2);
                        p4 = (pr * .19);
                    var CaAt = cr * .33;
                    var CaBt = cr * .24;
                    var CaFT = cr * .12;
                    var CaCT = cr * .19;
                    fr1 = fr * .30;
                    fr5 = fr * .30;
                    fr = fr - (fr1 + fr5);
                    fr2 = fr * .333;
                    fr3 = fr * .333;
                    fr4 = fr * .333;
					if (CaAt > 60)
                    {
                      ECaAtCal = ((Math.abs(CaAt - 60)) * 4) / 9;
                      fr4 = fr4 + ECaAtCal;
                      CaAt = 60;
                    }
                    if (CaBt > 60)
                    {
                      ECaBtCal = ((Math.abs(CaBt - 60)) * 4) / 9;
                      fr3 = fr3 + ECaBtCal;
                      CaBt = 60;
                    }
                    if (CaFT > 60)
                    {
                      ECaFtCal = ((Math.abs(CaFT - 60)) * 4) / 9;
                      fr1 = fr1 + ECaFtCal;
                      fr5 = fr5 + ECaFtCal;
                      CaFT = 60;
                    }
                    if (CaCT > 60)
                    {
                      ECaCtCal = ((Math.abs(CaCT - 60)) * 4) / 9;
                      fr2 = fr2 + ECaCtCal;
                      CaCT = 60;
                    }
                    switch(parseInt(a.find('input[name="mealsbt"]:checked').val()))
                        {
                            case 1:
                                Ca1 = CaBt;
                                Ca2 = CaAt;
                                Ca3 = CaCT;
                                Ca4 = CaFT;
                                Ca5 = CaFT; 
                                break;
                            case 2:
                                Ca1 = CaCT;
                                Ca2 = CaBt;
                                Ca3 = CaAt;
                                Ca4 = CaFT; 
                                Ca5 = CaFT; 
                                break;
                            case 3:
                                Ca1 = CaFT;
                                Ca2 = CaCT;
                                Ca3 = CaBt;
                                Ca4 = CaAt; 
                                Ca5 = CaFT; 
                                break;
                            case 4:
                                Ca1 = CaFT;
                                Ca2 = CaFT;
                                Ca3 = CaCT;
                                Ca4 = CaBt; 
                                Ca5 = CaAt; 
                                break;
                        }
                        meal1cal = ((pr1 * 4) + (fr1 * 9) + (CaFT * 4)).toFixed(2);
                        m1cal = ((pr1 * 4) + (fr1 * 9) + (CaFT * 4));
                        m2cal = ((pr2 * 4) + (fr2 * 9) + (CaCT * 4));   
                        meal2cal = ((pr2 * 4) + (fr2 * 9) + (CaCT * 4)).toFixed(2);   
                        meal3cal = ((pr3 * 4) + (fr3 * 9) + (CaBt * 4)).toFixed(2);   
                        m3cal = ((pr3 * 4) + (fr3 * 9) + (CaBt * 4));   
                        meal4cal = ((pr4 * 4) + (fr4 * 9) + (CaAt * 4)).toFixed(2);   
                        m4cal = ((pr4 * 4) + (fr4 * 9) + (CaAt * 4));   
                        meal5cal = ((pr5 * 4) + (fr5 * 9) + (CaFT * 4)).toFixed(2);   
                        m5cal = ((pr5 * 4) + (fr5 * 9) + (CaFT * 4));   
                        var totalproteingm = parseFloat((p1 + p2 + p3 + p4 + p5)).toFixed(2);
                        var totalfatgm = parseFloat((fr1 + fr2 + fr3 + fr4 + fr5)).toFixed(2);
                        var totalcarbsgm = parseFloat((CaFT + CaFT + CaBt + CaAt + CaCT)).toFixed(2);
                        var totalcal = parseFloat((m1cal + m2cal + m3cal + m4cal + m5cal)).toFixed(2); 
                        ctp = parseFloat((p1 + p2 + p3 + p4 + p5) * 4) ;
                        ctf = parseFloat((fr1 + fr2 + fr3 + fr4 + fr5) * 9);
                        ctc = parseFloat((CaFT + CaFT + CaBt + CaAt + CaCT) * 4);
                        tca = parseFloat((m1cal + m2cal + m3cal + m4cal + m5cal));
                        PercentProtein = ((ctp * 100) / tca).toFixed(2);
                        PercentCarbs = ((ctc * 100) / tca).toFixed(2);
                        PercentFats = ((ctf * 100) / tca).toFixed(2);
                        PercentCalories = ((tca * 100) / tca).toFixed(2); 
                        
                        var data1 = "<tr> <td style='color: #111'>Meal # 1</td><td style='color: #1B8CFF'>"+pr1+"<span class='small-g'>g</span></td> <td style='color: #00003F'>"+Ca1.toFixed(2)+"<span class='small-g'>g</span></td> <td style='color: #E06F00'>"+fr1.toFixed(2)+"<span class='small-g'>g</span></td><td style='text-align: center;'>"+meal1cal+"</td></tr>";
						
                        var data2 = "<tr class='table-info'> <td style='color: #111'>Meal # 2</td><td style='color: #1B8CFF'>"+pr2+"<span class='small-g'>g</span></td> <td style='color: #00003F'>"+Ca2.toFixed(2)+"<span class='small-g'>g</span></td> <td style='color: #E06F00'>"+fr2.toFixed(2)+"<span class='small-g'>g</span></td><td style='text-align: center;'>"+meal2cal+"</td> </tr>";
						
                        var data3 = "<tr> <td style='color: #111'>Meal # 3</td><td style='color: #1B8CFF'>"+pr3+"<span class='small-g'>g</span></td> <td style='color: #00003F'>"+Ca3.toFixed(2)+"<span class='small-g'>g</span></td> <td style='color: #E06F00'>"+fr3.toFixed(2)+"<span class='small-g'>g</span></td><td style='text-align: center;'>"+meal3cal+"</td> </tr>";
						
                        var data4 = "<tr class='table-info'> <td style='color: #111'>Meal # 4</td><td style='color: #1B8CFF'>"+pr4+"<span class='small-g'>g</span></td> <td style='color: #00003F'>"+Ca4.toFixed(2)+"<span class='small-g'>g</span></td> <td style='color: #E06F00'>"+fr4.toFixed(2)+"<span class='small-g'>g</span></td><td style='text-align: center;'>"+meal4cal+"</td> </tr>";
						
                        var data5 = "<tr> <td style='color: #111'>Meal # 5</td><td style='color: #1B8CFF'>"+pr5 + "<span class='small-g'>g</span></td> <td style='color: #00003F'>"+Ca5.toFixed(2)+"<span class='small-g'>g</span></td> <td style='color: #E06F00'>"+fr5.toFixed(2)+"<span class='small-g'>g</span></td><td style='text-align: center;'>"+meal5cal+"</td> </tr>";
                        var data6 = "<tr> <td style='color: #111'>Totals</td> <td style='color: #1B8CFF'>"+ totalproteingm +"<span class='small-g'>g</span></td> <td style='color: #00003F'>"+totalcarbsgm+"<span class='small-g'>g</span></td> <td style='color: #E06F00'>"+totalfatgm+"<span class='small-g'>g</span></td><td style='text-align: center;'>"+totalcal+"</td> </tr>";

                        $(".tablemeal").html(data1+data2+data3+data4+data5+data6);
                        break; 
                    case 6:
                        pr6 = (pr * .20).toFixed(2);
                        p6 = (pr * .20);
                        pr1 = (pr * .16).toFixed(2);
                        p1 = (pr * .16);
                        pr2 = (pr * .16).toFixed(2);
                        p2 = (pr * .16);
                        pr3 = (pr * .16).toFixed(2);
                        p3 = (pr * .16);
                        pr4 = (pr * .16).toFixed(2);
                        p4 = (pr * .16);
                        pr5 = (pr * .16).toFixed(2);
                        p5 = (pr * .16);
                    var CaAt = cr * .29;
                    var CaBt = cr * .20;
                    var CaFT = cr * .10;
                    var CaCT = cr * .17;
                    var Ca2CT = cr * .14;
                    fr1 = fr * .3;
                    fr6 = fr * .3;
                    fr = fr - (fr1 + fr6);
                    fr2 = fr * .25;
                    fr3 = fr * .25;
                    fr4 = fr * .25;
                    fr5 = fr * .25;
                    if (CaAt > 60)
                    {
                      ECaAtCal = ((Math.abs(CaAt - 60)) * 4) / 9;
                      fr5 = fr5 + ECaAtCal;
                      CaAt = 60;
                    }
                    if (CaBt > 60)
                    {
                      ECaBtCal = ((Math.abs(CaBt - 60)) * 4) / 9;
                      fr3 = fr3 + ECaBtCal;
                      CaBt = 60;
                    }
                    if (CaFT > 60)
                    {
                      ECaFtCal = ((Math.abs(CaFT - 60)) * 4) / 9;
                      fr1 = fr1 + ECaFtCal;
                      fr6 = fr6 + ECaFtCal;
                      CaFT = 60;
                    }
                    if (CaCT > 60)
                    {
                      ECaCtCal = ((Math.abs(CaCT - 60)) * 4) / 9;
                      fr4 = fr4 + ECaCtCal;
                      CaCT = 60;
                    }
                    if (Ca2CT > 60)
                    {
                      ECa2CtCal = ((Math.abs(Ca2CT - 60)) * 4) / 9;
                      fr2 = fr2 + ECa2CtCal;
                      Ca2CT = 60;
                    }
                    switch(parseInt(a.find('input[name="mealsbt"]:checked').val()))
                    {
                        case 1:
                            Ca1 = CaBt;
                            Ca2 = CaAt;
                            Ca3 = CaCT;
                            Ca4 = Ca2CT;
                            Ca5 = CaFT; 
                            Ca6 = CaFT; 
                            break;
                        case 2:
                            Ca1 = CaFT;
                            Ca2 = CaBt;
                            Ca3 = CaAt;
                            Ca4 = CaCT; 
                            Ca5 = Ca2CT; 
                            Ca6 = CaFT; 
                            break;
                        case 3:
                            Ca1 = Ca2CT;
                            Ca2 = CaCT;
                            Ca3 = CaBt;
                            Ca4 = CaAt; 
                            Ca5 = CaFT; 
                            Ca6 = CaFT; 
                            break;
                        case 4:
                            Ca1 = CaFT;
                            Ca2 = Ca2CT;
                            Ca3 = CaCT;
                            Ca4 = CaBt; 
                            Ca5 = CaAt; 
                            Ca6 = CaFT; 
                            break;
                        case 5:
                            Ca1 = CaFT;
                            Ca2 = Ca2CT;
                            Ca3 = CaCT;
                            Ca4 = CaBt; 
                            Ca5 = CaAt; 
                            Ca6 = CaFT; 
                            break;
                    }
                        meal1cal = ((pr1 * 4) + (fr1 * 9) + (CaFT * 4)).toFixed(2);
                        m1cal = ((pr1 * 4) + (fr1 * 9) + (CaFT * 4));
                        meal2cal = ((pr2 * 4) + (fr2 * 9) + (Ca2CT * 4)).toFixed(2);   
                        m2cal = ((pr2 * 4) + (fr2 * 9) + (Ca2CT * 4));   
                        meal3cal = ((pr3 * 4) + (fr3 * 9) + (CaBt * 4)).toFixed(2);   
                        m3cal = ((pr3 * 4) + (fr3 * 9) + (CaBt * 4));   
                        meal4cal = ((pr4 * 4) + (fr4 * 9) + (CaCT * 4)).toFixed(2);   
                        m4cal = ((pr4 * 4) + (fr4 * 9) + (CaCT * 4));   
                        meal5cal = ((pr5 * 4) + (fr5 * 9) + (CaAt * 4)).toFixed(2);   
                        m5cal = ((pr5 * 4) + (fr5 * 9) + (CaAt * 4));   
                        meal6cal = ((pr6 * 4) + (fr6 * 9) + (CaFT * 4)).toFixed(2);   
                        m6cal = ((pr6 * 4) + (fr6 * 9) + (CaFT * 4));   
                        var totalproteingm = parseFloat((p1 + p2 + p3 + p4 + p5 + p6)).toFixed(2);
                        var totalfatgm = parseFloat((fr1 + fr2 + fr3 + fr4 + fr5 + fr6)).toFixed(2);
                        var totalcarbsgm = parseFloat((CaFT + CaFT + CaBt + CaAt + CaCT + Ca2CT)).toFixed(2);
                        var totalcal = parseFloat((m1cal + m2cal + m3cal + m4cal + m5cal + m6cal)).toFixed(2); 
                        ctp = parseFloat((p1 + p2 + p3 + p4 + p5 + p6) * 4) ;
                        ctf = parseFloat((fr1 + fr2 + fr3 + fr4 + fr5 + fr6) * 9);
                        ctc = parseFloat((CaFT + CaFT + CaBt + CaAt + CaCT + Ca2CT) * 4);
                        tca = parseFloat((m1cal + m2cal + m3cal + m4cal + m5cal + m6cal));
                        PercentProtein = ((ctp * 100) / tca).toFixed(2);
                        PercentCarbs = ((ctc * 100) / tca).toFixed(2);
                        PercentFats = ((ctf * 100) / tca).toFixed(2);
                        PercentCalories = ((tca * 100) / tca).toFixed(2); 
                        var data1 = "<tr> <td style='color: #111'>Meal # 1</td><td style='color: #1B8CFF'>"+pr1+"<span class='small-g'>g</span></td> <td style='color: #00003F'>"+Ca1.toFixed(2)+"<span class='small-g'>g</span></td> <td style='color: #E06F00'>"+fr1.toFixed(2)+"<span class='small-g'>g</span></td> <td style='text-align: center;'>"+meal1cal+"</td></tr>";
						
                        var data2 = "<tr class='table-info'> <td style='color: #111'>Meal # 2</td><td style='color: #1B8CFF'>"+pr2+"<span class='small-g'>g</span></td> <td style='color: #00003F'>"+Ca2.toFixed(2)+"<span class='small-g'>g</span></td> <td style='color: #E06F00'>"+fr2.toFixed(2)+"<span class='small-g'>g</span></td><td style='text-align: center;'>"+meal2cal+"</td> </tr>";
						
                        var data3 = "<tr> <td style='color: #111'>Meal # 3</td><td style='color: #1B8CFF'>"+pr3+"<span class='small-g'>g</span></td> <td style='color: #00003F'>"+Ca3.toFixed(2)+"<span class='small-g'>g</span></td> <td style='color: #E06F00'>"+fr3.toFixed(2)+"<span class='small-g'>g</span></td><td style='text-align: center;'>"+meal3cal+"</td> </tr>";
						
                        var data4 = "<tr class='table-info'> <td style='color: #111'>Meal # 4</td> <td style='color: #1B8CFF'>"+pr4+"<span class='small-g'>g</span></td> <td style='color: #00003F'>"+Ca4.toFixed(2)+"<span class='small-g'>g</span></td> <td style='color: #E06F00'>"+fr4.toFixed(2)+"<span class='small-g'>g</span></td><td style='text-align: center;'>"+meal4cal+"</td> </tr>";
						
                        var data5 = "<tr> <td style='color: #111'>Meal # 5</td><td style='color: #1B8CFF'>"+pr5+"<span class='small-g'>g</span></td> <td style='color: #00003F'>"+Ca5.toFixed(2)+"<span class='small-g'>g</span></td> <td style='color: #E06F00'>"+fr5.toFixed(2)+"<span class='small-g'>g</span></td><td style='text-align: center;'>"+meal5cal+"</td> </tr>";
						
                        var data6 = "<tr class='table-info'> <td style='color: #111'>Meal # 6</td><td style='color: #1B8CFF'>" + pr6 + "<span class='small-g'>g</span></td> <td style='color: #00003F'>"+Ca6.toFixed(2)+"<span class='small-g'>g</span></td> <td style='color: #E06F00'>"+fr6.toFixed(2)+"<span class='small-g'>g</span></td><td style='text-align: center;'>"+meal6cal+"</td> </tr>";
                        var data7 = "<tr> <td style='color: #111'>Totals</td><td style='color: #1B8CFF'>"+ totalproteingm +"<span class='small-g'>g</span></td> <td style='color: #00003F'>"+totalcarbsgm+"<span class='small-g'>g</span></td> <td style='color: #E06F00'>"+totalfatgm+"<span class='small-g'>g</span></td><td style='text-align: center;'>"+totalcal+"</td> </tr>";
                            $(".tablemeal").html(data1+data2+data3+data4+data5+data6+data7);
                        
                    break;    
                }
                
                $("#result-protein").text(totalproteingm), $("#result-fat").text(totalfatgm), $("#result-carbs").text(totalcarbsgm), $("#result-calories").text(totalcal),$("#result-proteinp").text(PercentProtein+"%"), $("#result-fatp").text(PercentFats+"%"), $("#result-carbsp").text(PercentCarbs+"%"), $("#result-caloriesp").text(PercentCalories+"%"), M.addClass("vis"), 1 == t ? $("html,body").animate({
                    scrollTop: k.offset().top - $(".site-header").outerHeight()
                }, 500) : $("html,body").animate({scrollTop: $("#macro-results").offset().top}, 500)
            })
});

function AMPM(time)
{
    t = time.split(':');
    hours = t[0];
    mins = t[1];
    if(hours > 11 && hours <= 23)
    {
        if(hours == 12)
        {
            s = hours + ":" + mins + " PM";
        }
        else
        {
            s = (Math.abs(hours - 12)) + ":" + mins + " PM";
        }
    }
    else
    {
        s = time + " AM";
    };
    return s;
}
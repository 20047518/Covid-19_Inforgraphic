$(document).ready(function() {
    $('#fullpage').fullpage({ //initialize
        //set options
        sectionsColor: ['#454545', '#454545', '#454545'],
        navigation: true,
        navigationPosition: 'right',
        anchors: ['section1', 'section2', 'section3'], //name the anchors for each section
        afterLoad: function(origin, destination, direction) {
            if (destination.index == 1) { //section 2
                tl2.play(); //anime.js play method
                vaccinatedRate.play();
            }
            if (destination.index == 2) { //section 2
                tl3.play(); //anime.js play method
                dot.play();
            }
        }
    });
});

const labels = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14'
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Number of Cases',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [1134, 1056, 986, 771, 756, 721, 654, 742, 689, 512, 455, 376, 244, 103],
    }]
};

const config = {
    type: 'bar',
    data: data
};

const myChart = new Chart(
    document.getElementById('barChart'),
    config
);


$('#example').DataTable({
    "scrollY": "300px",
    "scrollCollapse": true,
    "paging": false,
    "bInfo": false,
});

tippy('#dot1', {
    placement: 'top', //place tippy to the right
    interactive: true, //allow interaction in tippy (e.g. click and select text)
    content: '<b>Bedok Polyclinic</b><br><i>11 Bedok North Street 1 Heartbeat@Bedok #02-01, #03-01, Singapore 469662</i><br><u>6343 1121</u>',
    allowHTML: true, //allow HTML in tippy content
    delay: 500, //delay tippy showing and hiding (in milliseconds)
    followCursor: true //get tippy to follow mouse cursor});
});

tippy('#dot2', {
    placement: 'top', //place tippy to the right
    interactive: true, //allow interaction in tippy (e.g. click and select text)
    content: '<b>Bukit Batok Polyclinic</b><br><i>50 Bukit Batok West Avenue 3, Singapore 659164</i><br><u>6343 1122</u>',
    allowHTML: true, //allow HTML in tippy content
    delay: 500, //delay tippy showing and hiding (in milliseconds)
    followCursor: true //get tippy to follow mouse cursor});
});

tippy('#dot3', {
    placement: 'top', //place tippy to the right
    interactive: true, //allow interaction in tippy (e.g. click and select text)
    content: '<b>Bukit Merah Polyclinic</b><br><i>162 Bukit Merah Central Level 4, Singapore 150163</i><br><u>6343 1123</u>',
    allowHTML: true, //allow HTML in tippy content
    delay: 500, //delay tippy showing and hiding (in milliseconds)
    followCursor: true //get tippy to follow mouse cursor});
});

tippy('#dot4', {
    placement: 'top', //place tippy to the right
    interactive: true, //allow interaction in tippy (e.g. click and select text)
    content: '<b>Choa Chu Kang Polyclinic</b><br><i>2 Teck Whye Crescent, Singapore 688846</i><br><u>6343 1124</u>',
    allowHTML: true, //allow HTML in tippy content
    delay: 500, //delay tippy showing and hiding (in milliseconds)
    followCursor: true //get tippy to follow mouse cursor});
});

tippy('#dot5', {
    placement: 'top', //place tippy to the right
    interactive: true, //allow interaction in tippy (e.g. click and select text)
    content: '<b>Clementi Polyclinic</b><br><i>451 Clementi Avenue 3, Singapore 120451</i><br><u>6343 1125</u>',
    allowHTML: true, //allow HTML in tippy content
    delay: 500, //delay tippy showing and hiding (in milliseconds)
    followCursor: true //get tippy to follow mouse cursor});
});

tippy('#dot6', {
    placement: 'top', //place tippy to the right
    interactive: true, //allow interaction in tippy (e.g. click and select text)
    content: '<b>Geylang Polyclinic</b><br><i>21 Geylang East Central, Singapore 389707</i><br><u>6343 1126</u>',
    allowHTML: true, //allow HTML in tippy content
    delay: 500, //delay tippy showing and hiding (in milliseconds)
    followCursor: true //get tippy to follow mouse cursor});
});

tippy('#dot7', {
    placement: 'top', //place tippy to the right
    interactive: true, //allow interaction in tippy (e.g. click and select text)
    content: '<b>Hougang Polyclinic</b><br><i>89 Hougang Avenue 4, Singapore 538829</i><br><u>6765 1121</u>',
    allowHTML: true, //allow HTML in tippy content
    delay: 500, //delay tippy showing and hiding (in milliseconds)
    followCursor: true //get tippy to follow mouse cursor});
});

tippy('#dot8', {
    placement: 'top', //place tippy to the right
    interactive: true, //allow interaction in tippy (e.g. click and select text)
    content: '<b>Jurong Polyclinic</b><br><i>190 Jurong East Avenue 1, Singapore 609788</i><br><u>6765 1122</u>',
    allowHTML: true, //allow HTML in tippy content
    delay: 500, //delay tippy showing and hiding (in milliseconds)
    followCursor: true //get tippy to follow mouse cursor});
});

tippy('#dot9', {
    placement: 'top', //place tippy to the right
    interactive: true, //allow interaction in tippy (e.g. click and select text)
    content: '<b>Marine Parade Polyclinic</b><br><i>80 Marine Parade Central, Singapore 440080</i><br><u>6765 1123</u>',
    allowHTML: true, //allow HTML in tippy content
    delay: 500, //delay tippy showing and hiding (in milliseconds)
    followCursor: true //get tippy to follow mouse cursor});
});

tippy('#dot10', {
    placement: 'top', //place tippy to the right
    interactive: true, //allow interaction in tippy (e.g. click and select text)
    content: '<b>Outram Polyclinic</b><br><i>3 Second Hospital Avenue, #02-00 Health Promotion Board Building, Singapore 168937</i><br><u>6765 1124</u>',
    allowHTML: true, //allow HTML in tippy content
    delay: 500, //delay tippy showing and hiding (in milliseconds)
    followCursor: true //get tippy to follow mouse cursor});
});

tippy('#dot11', {
    placement: 'top', //place tippy to the right
    interactive: true, //allow interaction in tippy (e.g. click and select text)
    content: '<b>Pasir Ris Polyclinic</b><br><i>1 Pasir Ris Drive 4, Singapore 519457</i><br><u>6765 1125</u>',
    allowHTML: true, //allow HTML in tippy content
    delay: 500, //delay tippy showing and hiding (in milliseconds)
    followCursor: true //get tippy to follow mouse cursor});
});

tippy('#dot12', {
    placement: 'top', //place tippy to the right
    interactive: true, //allow interaction in tippy (e.g. click and select text)
    content: '<b>Pioneer Polyclinic</b><br><i>26 Jurong West Street 61, Singapore 648201</i><br><u>6765 1126</u>',
    allowHTML: true, //allow HTML in tippy content
    delay: 500, //delay tippy showing and hiding (in milliseconds)
    followCursor: true //get tippy to follow mouse cursor});
});

anime({
    targets: '.greenNum',
    innerHTML: [0, 257510], //start and end values
    easing: 'linear',
    round: 1, //rounds off to zero decimal places 


    duration: 2000


});





anime({


    targets: '.orangeNum',


    innerHTML: [0, 1365], //start and end values


    easing: 'linear',


    round: 1, //rounds off to zero decimal places 


    duration: 2000


});





anime({


    targets: '.redNum',


    innerHTML: [0, 678], //start and end values


    easing: 'linear',


    round: 1, //rounds off to zero decimal places 


    duration: 2000


});





anime({


    targets: '.nine',


    innerHTML: [0, 9], //start and end values


    easing: 'linear',


    round: 1, //rounds off to zero decimal places 


    duration: 1000


});





var tl1 = anime.timeline({


    easing: 'easeOutExpo',


    direction: 'reverse',


});





tl1


    .add({


    targets: '.casesP3',


    translateX: -750,


    direction: 'reverse',


})





.add({


    targets: '.casesP2',


    translateX: -750,


    direction: 'reverse',


})





.add({


    targets: '.casesP1',


    translateX: -750,


    direction: 'reverse',


})





.add({


    targets: '.cases',


    translateX: -750,


    direction: 'reverse',


});





anime({


    targets: '.dailyCases',


    translateX: 750,


    direction: 'reverse',


});





var vaccinatedRate = anime({


    targets: '.vaccinatedRate',


    translateX: -750,


    direction: 'reverse',


});





var tl2 = anime.timeline({


    easing: 'easeOutExpo',


    direction: 'reverse',


});


tl2


    .add({


    targets: '.vp3',


    translateX: 750,


    direction: 'reverse',


})





.add({


    targets: '.vp2',


    translateX: 750,


    direction: 'reverse',


})





.add({


    targets: '.vp1',


    translateX: 750,


    direction: 'reverse',


})





.add({


    targets: '.vp',


    translateX: 750,


    direction: 'reverse',


});





var tl3 = anime.timeline({


    easing: 'easeOutExpo',


    direction: 'reverse',


});





tl3


    .add({


    targets: '.vc1',


    translateX: -750,


    direction: 'reverse',


})





.add({


    targets: '.vc',


    translateX: -750,


    direction: 'reverse',


})

.add({
    targets: ".dot",
    opacity: [1, 0], //start and end values
    scale: [1, 10],
    rotate: 360,
    easing: 'easeOutBounce',
    duration: 1000,
    delay: 500
});
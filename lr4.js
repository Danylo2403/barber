// function calculateDaysToNextAugust23() {
//   var today = new Date();
//   var targetDate = new Date(today.getFullYear(), 7, 23); // 7 представляє серпень (місяці нумеруються з нуля)

//   if (today.getMonth() > 7 || (today.getMonth() === 7 && today.getDate() > 23)) {
//     targetDate.setFullYear(targetDate.getFullYear() + 1);
//   }

//   var timeDiff = targetDate.getTime() - today.getTime();
//   var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

//   return daysDiff;
// }

// Завдання 1: Кількість годин до початку літа
function calculateHours() {
    var currentDate = new Date();
    var summerStartDate = new Date(currentDate.getFullYear(), 5, 1); // Початок літа - 1 червня (місяць з нуля)
    var hoursLeft = Math.ceil((summerStartDate - currentDate) / (1000 * 60 * 60)); // Кількість годин до початку літа
    document.getElementById("hours").value = hoursLeft;
}

// Завдання 3: Кількість днів до весняного й осіннього рівнодення
var currentDate = new Date();
var springEquinox = new Date(currentDate.getFullYear(), 2, 22); // Весняне рівнодення - 22 березня (місяць з нуля)
var autumnEquinox = new Date(currentDate.getFullYear(), 8, 22); // Осіннє рівнодення - 22 вересня (місяць з нуля)
var daysToSpringEquinox = Math.ceil((springEquinox - currentDate) / (1000 * 60 * 60 * 24)); // Кількість днів до весняного рівнодення
var daysToAutumnEquinox = Math.ceil((autumnEquinox - currentDate) / (1000 * 60 * 60 * 24)); // Кількість днів до осіннього рівнодення
var message = "Днів до весняного рівнодення: " + daysToSpringEquinox + "\nДнів до осіннього рівнодення: " + daysToAutumnEquinox;
alert(message);

// Завдання 4: Повідомлення щодо кількості спрацьовувань обробника події в поточну хвилину
function showEventCount() {
    var currentMinute = new Date().getMinutes();
    alert("Кількість спрацьовувань обробника події в поточну хвилину: " + currentMinute);
}
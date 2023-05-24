function calculateDaysToNextAugust23() {
  var today = new Date();
  var targetDate = new Date(today.getFullYear(), 7, 23); // 7 представляє серпень (місяці нумеруються з нуля)

  if (today.getMonth() > 7 || (today.getMonth() === 7 && today.getDate() > 23)) {
    targetDate.setFullYear(targetDate.getFullYear() + 1);
  }

  var timeDiff = targetDate.getTime() - today.getTime();
  var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return daysDiff;
}
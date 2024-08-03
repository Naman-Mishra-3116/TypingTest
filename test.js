function removeDuplicates(array) {
    const uniqueTests = array.reduce((acc, current) => {
        const key = `${current.userId}_${current.testId}`;
        if (!acc.has(key)) {
            acc.set(key, current);
        } else {
            const existing = acc.get(key);
            if (new Date(current.time) > new Date(existing.time)) {
                acc.set(key, current);
            }
        }
        return acc;
    }, new Map());

    return Array.from(uniqueTests.values());
}




const data = [
  { wpm: 90, accuracy: 100, time: "12:10" },
  { wpm: 90, accuracy: 100, time: "12:10" },
  { wpm: 90, accuracy: 100, time: "12:10" },
  { wpm: 80, accuracy: 20, time: "12:20" },
];


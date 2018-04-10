export function postsSorter (option, array) {
    switch (option) {
        case "newest":
            return array.sort((a, b) => parseFloat(a.timestamp) - parseFloat(b.timestamp));
        case "oldest":
            return array.sort((a, b) => parseFloat(b.timestamp) - parseFloat(a.timestamp));
        case "highest-rated":
            return array.sort((a, b) => parseFloat(b.voteScore) - parseFloat(a.voteScore));
        case "lowest-rated":
            return array.sort((a, b) => parseFloat(a.voteScore) - parseFloat(b.voteScore));
        default:
            return console.log('Sorter function - no case matched');
    }
}
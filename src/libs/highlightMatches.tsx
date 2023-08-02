export const highlightMatches = (text: string, filterText: string) => {
    const lowerCasedText = text.toLowerCase();
    const lowerCasedFilterText = filterText?.toLowerCase().trim(); // Используем значение из инпута
    const matchIndex = lowerCasedText.indexOf(lowerCasedFilterText);
    if (matchIndex !== -1 && lowerCasedFilterText !== '') {
        const beforeMatch = text.substring(0, matchIndex);
        const match = text.substring(matchIndex, matchIndex + filterText.length); // Используем значение из инпута
        const afterMatch = text.substring(matchIndex + filterText.length);
        return (
            <span>
                {beforeMatch}
                <span className="highlight">{match}</span>
                {afterMatch}
            </span>
        );
    }
    return text;
};

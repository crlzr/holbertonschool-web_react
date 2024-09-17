interface MajorCredits {
    credits: number & { __brand: 'MajorCredits'}
};

interface MinorCredits {
    credits: number & { __brand: 'MinorCredits'}
};


function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
    let sum = subject1.credits + subject2.credits
    return {credits: sum} as MajorCredits

}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
    let sum = subject1.credits + subject2.credits
    return {credits: sum} as MinorCredits
}
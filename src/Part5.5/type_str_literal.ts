{
    type Season = 'spring' | 'summer' | 'autumn' | 'winter'
    function getScene(s: Season) {

    }
    getScene('spring')
    // getScene('fall')

    type Falsy = '' | 0 | false | null | undefined
    type Dice = 1 | 2 | 3 | 4 | 5 | 6
    enum Subject { JAPANESE, MATH, SCIENCE, SOCIAL_STUDY, ENGLISH }
    type SciencePart = Subject.MATH | Subject.SCIENCE

    const a = 10
    let b = 53
    b++
    console.log(b)
}
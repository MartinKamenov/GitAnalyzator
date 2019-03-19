const ProgrammingLanguageImages = {
    'C#': '/languages/cSharp.png',
    'JavaScript': '/languages/js.png',
    'Java': '/languages/java.png',
    'PHP': '/languages/php.png',
    'Python': '/languages/python.png',
    'HTML': '/languages/html.png',
    'C': '/languages/c.png',
    'C++': '/languages/cPlusPlus.png',
    'CSS': '/languages/css.png',
    'JupyterNotebook': '/languages/jupyterNotebook.png',
    'MATLAB': '/languages/matlab.png',
    'TypeScript': '/languages/ts.png',
    'PowerShell': '/languages/powerShell.png',
    'Shell': '/languages/powerShell.png',
    'Go': '/languages/go.png',
    'Objective-C': '/languages/objc.png',
    'Ruby': '/languages/ruby.png',
    'TeX': '/languages/tex.png',
    'Vimscript': '/languages/vim.png',
    'Dart': '/languages/dart.png',
    'Kotlin': '/languages/kotlin.png',
    'Puppet': '/languages/puppet.png',
    'Perl': '/languages/perl.png',
    'Swift': '/languages/swift.png',
    'undefined': '/languages/undefined.png',
    getImageSrc: function(language) {
        if(this[language]) {
            return this[language];
        } else {
            return this['undefined'];
        }
    },

    getLanguageColor: function(language) {
        const index = Object.keys(this).indexOf(language);
        return colors[index] ? colors[index] : '#EDEDED';
    }
};

const colors = [
    '#178600',
    '#F1E05A',
    '#B07219',
    '#4F5D95',
    '#3572A5',
    '#E34C26',
    '#555555',
    '#F34B7D',
    '#563D7C',
    '#DA5B0B',
    '#E16737',
    '#2B7489',
    '#012456',
    '#89E051',
    '#00ADD8',
    '#438EFF',
    '#701516',
    '#3D6117',
    '#199F4B',
    '#00B4AB',
    '#F18E33',
    '#302B6D',
    '#0298C3',
    '#FFAC45',
    '#7F7F7F'
];

export default ProgrammingLanguageImages;
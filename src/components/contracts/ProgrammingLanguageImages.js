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
    }
};

export default ProgrammingLanguageImages;
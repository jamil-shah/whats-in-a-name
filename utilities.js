document.addEventListener('alpine:init', () => {
    console.log('Alpine is initializing');
    Alpine.data('randomNameGenerator', () => ({
        names: ['Jamil', 'Carson', 'Andrew', 'Loonmei', 'Jenna', 'Fabian', 'Benjamin', 'George', 'Ryan', 'Steve'],
        randomName: '',
        generateName() {
            console.log('generateName called');
            const newName = this.names[Math.floor(Math.random() * this.names.length)];
            alert(newName);
            this.randomName = newName;
        }
    }));
});
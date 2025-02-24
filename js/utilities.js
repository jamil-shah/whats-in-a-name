document.addEventListener('alpine:init', () => {
    Alpine.data('randomNameGenerator', () => ({
      names: ['Jamil', 'Carson', 'Andrew', 'Loonmei', 'Jenna', 'Fabian', 'Benjamin', 'George', 'Ryan', 'Steve'],
      randomName: '',
      generateName() {
        const newName = this.names[Math.floor(Math.random() * this.names.length)];
        alert(newName);
        this.randomName = newName;
      }
    }));
  });
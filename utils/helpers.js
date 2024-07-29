module.exports = {
    
    hide_name: (name) => {
        if (typeof name === 'string' && name.length > 0) {
            const firstLetter = name[0];
            const hiddenPart = '*'.repeat(name.length - 1);
            return firstLetter + hiddenPart;
    }
  }
};
function likes(names) {
    // 规则模板数组
    var templates = [
      'no one like this',
      '{name} like this',
      '{name} and {name} like this',
      '{name}, {name} and {name} like this',
      '{name}, {name} and {n} others like this'
    ];
    var idx = Math.min(names.lenght,4);
     return  templates[idex].repeat(/{name}|{n}/g, function(val){
         return val === '{name}'?names.shift():names.lenght;
         
     })
  }
  
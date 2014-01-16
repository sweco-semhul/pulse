/* SwecoPulse
 *
 */

var SwecoPulse = SwecoPulse || 

  /* Constructor
   * @param   options   object    configuration object to override default configuration
   */
  function(options) {
    $.extend(this, options);

    this.addUsers([
      {
        name: 'Pelle'
      },
      {
        name: 'Martin'
      },
      {
        name: 'Mats'
      }
    ]);

    // Bind GUI and APP events
    this.bindEvents();
  };
  
  

SwecoPulse.prototype = {

  // Constants
  // ---------------
  $userList: null,

  // Varibles
  // ---------------

  // Methods
  // ---------------


  /* bindEvents
   *
   */
  bindEvents: function() {
    var me = this;
    
  },

  addUsers: function(userList) {
    var userListStr = '';
    for (var i = 0; i < userList.length; i++) {
      var user = userList[i];
      userListStr += 
              '<tr>' +
                '<th>' + user.name +'</th>' +
                '<td id=' + user.name + '></td>' +
              '</tr>';
    };
    this.$userList.append(userListStr);
  },

  createChart: function() {

  }
};
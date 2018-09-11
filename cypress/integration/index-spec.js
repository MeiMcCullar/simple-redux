describe('app', function() {
    beforeEach(function() {
        cy.visit('http://localhost:3000/');
      });

    it('contains "React App" in the title', function() {
        cy.title().should('contain', 'React App');
    });

    it('contains "Welcome to React" in the heading', function() {
        cy.get('.App-title').should('contain', 'Welcome to React');
    });

    it('contains "Welcome to React" in the title', function() {
        cy.get('.App-intro').should('contain','Click on the button to see redux magic.');
    });

    it('contains "Test redux action" button', function() {
        cy.get('button').should('contain', 'Test redux action')
    });

    it('contains a blank simpler reducer string', function() {
        cy.get('.Action-output').should('contain', '{"simpleReducer":{}}');
    });

    context('when clicking on the button', function() {
        it('updates the json string', function() {
            cy.get('button').click();
            cy.get('.Action-output').should('contain', '{"simpleReducer":{"result":"result_of_simple_action"}}');
        });

    });
  });


//   class App extends Component {
//     render() {
//       return (
//         <div className="App">
//           <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <h1 className="App-title">Welcome to React</h1>
//           </header>
//           <p className="App-intro">
//             To get started, edit <code>src/App.js</code> and save to reload.
//             <button onClick={this.simpleAction}>Test redux action</button>
//           </p>
//           <pre>
//    {
//     JSON.stringify(this.props)


  import React, { Component } from "react";
  import Salad from "./Salad";
  //import  ViewOrder from "./ViewOrder";

  let inventory = {
    Sallad: {price: 10, foundation: true, vegan: true},
    Pasta: {price: 10, foundation: true, gluten: true},
    'Sallad + Pasta': {price: 10, foundation: true, gluten: true},
    'Sallad + Matvete': {price: 10, foundation: true, vegan: true, gluten: true},
    'Sallad + Glasnudlar': {price: 10, foundation: true, gluten: true},
    'Sallad + Quinoa': {price: 10, foundation: true, vegan: true},
  
    'Kycklingfilé': {price: 10, protein: true},
    'Rökt kalkonfilé': {price: 10, protein: true},
    'Norsk fjordlax': {price: 30, protein: true},
    'Handskalade räkor från Smögen': {price: 40, protein: true},
    'Pulled beef från Sverige': {price: 15, protein: true},
    'Marinerad bönmix': {price: 10, protein: true, vegan: true},
  
    Avocado: {price: 10, extra: true, vegan: true},
    Bacon: {price: 10, extra: true},
    'Böngroddar': {price: 5, extra: true, vegan: true},
    'Cashewnötter': {price: 5, extra: true, vegan: true},
    'Chèvreost': {price: 15, extra: true, lactose: true},
    Fetaost: {price: 5, extra: true, lactose: true},
    'Färsk koriander': {price: 10, extra: true, vegan: true},
    Gurka: {price: 5, extra: true, vegan: true},
    'Inlagd lök': {price: 5, extra: true, vegan: true},
    Jalapeno: {price: 5, extra: true, vegan: true},
    'Krossade jordnötter': {price: 5, extra: true, vegan: true},
    Krutonger: {price: 5, extra: true, gluten: true},
    'Körsbärstomater': {price: 5, extra: true, vegan: true},
    Lime: {price: 5, extra: true, vegan: true},
    Majs: {price: 5, extra: true, vegan: true},
    Oliver: {price: 5, extra: true, vegan: true},
    Paprika: {price: 5, extra: true, vegan: true},
    Parmesan: {price: 5, extra: true, lactose: true},
    'Rivna morötter': {price: 5, extra: true, vegan: true},
    'Rostade sesamfrön': {price: 5, extra: true, vegan: true},
    Ruccola: {price: 5, extra: true, vegan: true},
    'Rödlök': {price: 5, extra: true, vegan: true},
    'Sojabönor': {price: 5, extra: true, vegan: true},
    'Soltorkad tomat': {price: 5, extra: true, vegan: true},
    Tomat: {price: 5, extra: true, vegan: true},
    'Valnötter': {price: 5, extra: true, vegan: true},
    'Ägg': {price: 5, extra: true},
  
    Ceasardressing: {price: 5, dressing: true, lactose: true},
    Dillmayo: {price: 5, dressing: true},
    Honungsdijon: {price: 5, dressing: true, vegan: true},
    Kimchimayo: {price: 5, dressing: true},
    Pesto: {price: 5, dressing: true, lactose: true},
    Rhodeisland: {price: 5, dressing: true, lactose: true},
    'Rostad aioli': {price: 5, dressing: true},
    'Soyavinägrett': {price: 5, dressing: true, vegan: true},
    'Örtvinägrett': {price: 5, dressing: true, vegan: true},
  }; 
  class ComposeSalad extends Component {
    constructor(props) {
      super(props);
      this.state = { foundation: "", protein: {}, extra: {}, dressing: "" };
  
      this.createSalad = this.createSalad.bind(this);
      this.onClickingChangeTo = this.onClickingChangeTo.bind(this);
      this.onFormCheckboxChange = this.onFormCheckboxChange.bind(this);
      this.findPrice = this.findPrice.bind(this);
    }
  
    onClickingChangeTo(key, event) {

     // if( event.target.key ==)
     // console.log(" onClickingChangeTo key " );
      this.setState({[key]: event.target.value
      });
    }
  
    onFormCheckboxChange(key, item, event) {
      //const obj = { ...this.state[key] };
      const obj = {...this.state[key] };
      obj[item] = event.target.checked;
      //console.log( " event.target.checked " + event.target.checked );
      this.setState({
        [key]: obj
      });
    }
  
    
    

    findPrice( item) {

      for(var i= 0 ; i<item.length; i++){
        
        console.log( inventory[item[i]].price); 
       // salad.addList(inventory[item[i]].price); 
      }
      //console.log( inventory[ item].price); 
     } 
    createSalad(event) {
      event.preventDefault();
      /*const salad = new Salad(
        this.state.foundation,
        // this.state.protein,
        Object.keys(this.state.protein).filter(key => this.state.protein[key]),
        Object.keys(this.state.extra).filter(key => this.state.extra[key]),
        this.state.dressing
      );*/

     

      const salad = new Salad();
      salad.addFoundation( this.state.foundation);
      salad.addList(inventory[ this.state.foundation].price) ;
     // salad.addList(inventory[ this.state.foundation].price)
      //alert( " addlist " + salad.addList());
      salad.addProtein( Object.keys(this.state.protein).filter(key => this.state.protein[key]) );


      //salad.addList(Object.keys(this.state.protein).filter(key => this.state.protein[key].price));
      let plist = Object.keys(this.state.protein).filter(key => this.state.protein[key]) ;
      //alert( " plist " + plist ); 
      //salad.addList ( this.findPrice (plist));
      for(var i= 0 ; i<plist.length; i++){
        
        console.log( inventory[plist[i]].price); 
        salad.addList(inventory[plist[i]].price); 
      }



      salad.addExtra(Object.keys(this.state.extra).filter(key => this.state.extra[key]) );
      //salad.addList(this.findPrice(Object.keys(this.state.extra).filter(key => this.state.extra[key].price)));
      //console.log( " FindPrice ");
      //this.findPrice(Object.keys(this.state.extra).filter(key => this.state.extra[key]));
      let plist2 = Object.keys(this.state.extra).filter(key => this.state.extra[key]) ;
      //alert( " plist " + plist ); 
      //salad.addList ( this.findPrice (plist));
     
     
      for(var i= 0 ; i<plist2.length; i++){
        
        console.log( inventory[plist2[i]].price); 
        salad.addList(inventory[plist2[i]].price); 
       
      }
      salad.addDressing( this.state.dressing);
      salad.addList(inventory[this.state.dressing].price)
     // console.log( " addList ");
     // console.log( Object.keys(this.state.extra).filter(key => this.state.extra[key]))
     console.log( " salad priclist  "); 
     console.log( salad.priceList); 
     console.log( "  TotalPrice  "); 
     console.log(  salad.TotalPrice(salad.priceList)); 

      this.setState({
        foundation: "",
        protein: "",
        extra: {},
        dressing: ""
      });
      this.props.addSalad(salad);
    }
  
    createFoundationOrDressing(key) {
      const inventory = this.props.inventory;

      
      const varor_List = Object.keys(inventory).filter(name => inventory[name][key] + inventory[name][key] );
      
      return (
        <div className="form-group">
          <label>{key[0].toUpperCase() + key.slice(1)}</label>
          <select
            id={key}
          
            onChange={event => this.onClickingChangeTo(key, event)}
            className="form-control"
            value={this.state[key]}
          >
            <option >
            välja en 
            </option>
            {varor_List.map(name => (
              <option key={name}>{name}</option>
            ))}
          </select>
        </div>
      );
    }
  
    createCheckBoxProteinOrExtra(key, NameOf ) {
      const inventory = this.props.inventory;
      const varor_List = Object.keys(inventory).filter(name => inventory[name][key]);
       
      //alert(" varor_List" + varor_List);
      /*let foundations = Object.keys(inventory).filter(name => inventory[name].foundation);
      let proteins = Object.keys(inventory).filter(name => inventory[name].protein);
      let extras = Object.keys(inventory).filter(name => inventory[name].extra);
      let dressings = Object.keys(inventory).filter(name => inventory[name].dressing); */
      return (
        <div>
          <label>{NameOf[0].toUpperCase() + NameOf.slice(1) +  "s"}</label>
          <div>
            
            {varor_List.map(item => (
              <div key={item} className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  name={item}
                  type="checkbox"
                  checked={this.state[key][item]}
                  onChange={event => this.onFormCheckboxChange(key, item, event)}
                />
                <label className="form-check-label">{item}</label>
              </div>
            ))}
          </div>
        </div>
      );
    }
  
    render() {
      return (
        <div className="container">
          <form onSubmit={this.createSalad}>
           {this.createFoundationOrDressing("foundation")}
           {this.createCheckBoxProteinOrExtra("protein", "protein")}
            {this.createCheckBoxProteinOrExtra("extra", "extra")}
            {this.createFoundationOrDressing("dressing")}


            <input type="submit" className="btn btn-primary" value="Submit" />
           
          </form>
        </div>
      );
    }
  }
  
  export default ComposeSalad; 











# simple accordion component

## layout

- this component has build in *react* and styles using a pre processor *sass*

- they have tree components *title*, *accordion* and *openClose*
- - title is a component housing a logo and an <h1> tag
- - accordion is a details tag with an summary and a p tags inside him
- - openClose is an img inside summary

### code operation

- the accordion componnent have an state, this state is used to map if it is open or close, this state is passed for **openClose** component as a props

- openClose uses an useEffect hook to change the src of image when a state received is true or false (if the accordion ir open or close)
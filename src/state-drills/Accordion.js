import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {sections: []};

    state = {
        currentSection: null,
    };
    
    handleButtonClick = (index) => {
        this.setState({ currentSection: index })
    }

    renderItems(section, idx, currentSection) {
        return (
            <li className='item' key={idx}>
                <button type='button' onClick={() => this.handleButtonClick(idx)}>
                    {section.title}
                </button>
                {(currentSection === idx) && <p>{section.content}</p>}
            </li>
        )
    }
    
    render() {
        const {currentSection} = this.state
        const {sections} = this.props
        return (
            <ul className='Accordion'>
                {sections.map((section,idx) => this.renderItems(section, idx, currentSection)
                )}
            </ul>
        )
  }  
}

export default Accordion;
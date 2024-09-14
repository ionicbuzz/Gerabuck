import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt

data = {
    'Category': ['A', 'B', 'C', 'D'],
    'Value1': [20, 30, 25, 35],
    'Value2': [15, 25, 30, 20]
}

df = pd.DataFrame(data)

def stacked_bar_chart(data):
    fig, ax = plt.subplots()
    data.plot(kind='bar', stacked=True, ax=ax)
    ax.set_xticklabels(data.index)
    ax.set_ylabel('Value')
    ax.set_xlabel('Category')
    st.pyplot(fig)

def main():
    st.title('Stacked Bar Chart')
    st.write('Sample DataFrame:')
    st.write(df)
    
    stacked_bar_chart(df.set_index('Category'))

if __name__ == "__main__":
    main()
import streamlit as st
import pandas as pd
import plotly.express as px

# Title for the web app
st.title('CSV File Analysis')

# Upload a CSV file
uploaded_file = st.file_uploader("Upload a CSV file", type=["csv"])

# Check if a file has been uploaded
if uploaded_file is not None:
    
    #col1, col2, col3 = st.columns()

    # Read the CSV file into a DataFrame
    df = pd.read_csv(uploaded_file)

    # Perform analysis (you can add more analysis here)
    st.write("Summary Statistics:")
    st.dataframe(df)

    # Visualize the data (you can add more visualization here)
    st.write("Visual Analysis")

    if 'gender' in df.columns:
        def stacked_bar_chart(data):
            fig = px.bar(data, x=data.index, y=range(0, 48842, 1), barmode='stack')
            st.plotly_chart(fig)

        def main():
            st.title('Stacked Bar Chart')
            st.write('Sample DataFrame:')
            st.write(df)
    
        stacked_bar_chart(df.set_index('gender'))

        if __name__ == "__main__":
            main()

        
    else:
        st.write("The uploaded CSV file does not contain a 'gender' column.")
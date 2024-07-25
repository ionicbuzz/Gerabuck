import streamlit as st

def main():
    st.title("Number Multiplier")

    # Text input field for user to enter a number
    user_input = st.number_input("Enter a number:")

    # Button to trigger multiplication
    if st.button("Times 3"):
        result = user_input * 3
        st.write("Result:", result)

if __name__ == "__main__":
    main()

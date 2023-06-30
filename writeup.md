Here's a write-up for the FinanceTrackerWidget:

The FinanceTrackerWidget is a powerful tool within the Planner App that enables users to effectively track and manage their finances. This custom widget provides an intuitive interface for recording income and expenses, calculating totals, and maintaining a clear overview of financial activities.

## Explanation of Finance Tracker Widget
'Usage'
The FinanceTrackerWidget offers several key advantages for users:

- Streamlined Financial Management:
  With the FinanceTrackerWidget, users can easily record their financial transactions, including descriptions, amounts, and transaction types (income or expense). By providing a user-friendly interface, the widget simplifies the process of tracking income and expenses, allowing users to stay organized and gain insights into their financial patterns.

- Real-time Summaries:
  The widget dynamically calculates and displays the total income, total expense, and overall balance based on the recorded transactions. This real-time summary offers users an instant snapshot of their financial situation, empowering them to make informed decisions and maintain control over their finances.

- Transaction History:
  The FinanceTrackerWidget maintains a comprehensive transaction history, showcasing each recorded transaction along with its description, amount, and type. This history provides a clear audit trail of financial activities, allowing users to review past transactions and identify trends or areas for improvement.

## Working with Finance Tracker Widget:

The FinanceTrackerWidget is designed to be user-friendly and intuitive. Here's a step-by-step guide on how to use this widget within the Planner App:

1. Launch the Planner App, and the FinanceTrackerWidget will be prominently displayed.

2. To add a new transaction, enter a brief description of the transaction, specify the amount (positive for income and negative for expenses), and select the appropriate transaction type (income or expense).

3. Click the "Add Transaction" button to record the transaction. The FinanceTrackerWidget will instantly update the totals and display the newly added transaction in the transaction history section.

4. To gain insights into your financial activities, review the real-time summaries provided by the widget. The "Total Income" shows the cumulative income from all recorded transactions, the "Total Expense" represents the accumulated expenses, and the "Balance" indicates the difference between income and expenses.

5. Scroll down within the FinanceTrackerWidget to explore the transaction history. Each recorded transaction will be listed, displaying its description, amount, and type. The transaction history serves as a reference for users to track their financial activities over time.

6. To edit a transaction, locate the desired transaction in the transaction history and click the "Edit" button associated with it. This action will open a window where you can modify the transaction's description, amount, or type. Save your changes to update the transaction.

7. If a transaction becomes irrelevant or needs to be removed, click the "Delete" button associated with the transaction. The FinanceTrackerWidget will promptly remove the transaction from the history and adjust the totals accordingly.

8. If desired, you can clear the entire transaction history by clicking the "Clear History" button at the top of the FinanceTrackerWidget. This action will remove all recorded transactions and reset the totals to zero.

By leveraging the FinanceTrackerWidget within the Planner App, users can easily monitor their income, expenses, and overall financial status. This integrated solution empowers users to stay organized, make informed financial decisions, and achieve their financial goals.

## Code Mechanism Explanation

The FinanceTrackerWidget is implemented as a functional component in React, utilizing hooks such as useState for managing state. Here's an overview of its code functionality:

- The widget maintains a state variable to store the transaction history as an array of objects, each representing a single transaction.

- When a user adds a new transaction, the widget updates the transaction history state by appending the new transaction object to the existing array.

- The widget calculates the totals (total income, total expense, and balance) by iterating over the transaction history and summing the amounts based on their types.

- To edit a transaction, the widget locates the corresponding transaction object in the history array using a unique identifier and modifies the relevant properties (description, amount, or type) based on user input.

- To delete a transaction, the widget filters the transaction history array, removing the transaction object with the specified unique identifier.

- The "Clear History" functionality simply resets the transaction history state to an empty array, effectively removing all recorded transactions.

By employing React's state management and array manipulation techniques, the FinanceTrackerWidget delivers a seamless and efficient financial tracking experience to users within the Planner App.
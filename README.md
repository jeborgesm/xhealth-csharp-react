## Project Overview

**Repository:** [xhealth-csharp-react](https://github.com/jeborgesm/xhealth-csharp-react)  
**Description:** Patient Account reporting web site using CSharp and React JS.  
**Languages:** C# (47.8%), JavaScript (46.5%), HTML (4.4%), CSS (1.3%)  

## Technology Stack

The project utilizes a variety of technologies, including but not limited to:
- React
- C#
- ASP.NET

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/jeborgesm/xhealth-csharp-react.git
   ```

2. Navigate to the project directory:
   ```bash
   cd xhealth-csharp-react
   ```

3. Install the necessary backend dependencies:
   ```bash
   cd backend
   dotnet restore
   ```

4. Install the necessary frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

5. Run the backend:
   ```bash
   cd ../backend
   dotnet run
   ```

6. Run the frontend:
   ```bash
   cd ../frontend
   npm start
   ```

## Usage

The application provides a web-based interface to generate custom exports of account information meeting a given set of criteria. The following are the business requirements and assumptions for the solution:

### Business Requirements

- **GeneralHospital:** 
  - Single pipe delimited file with all account information.
  - Patient’s name format: `[Last],[First Initial]`.
  - Date format: `MM-DD-YYYY`.
  - Export file name format: `yyyymmdd-gh.data.dat`.

- **VeteranHospital:** 
  - One comma-delimited file per unique facility with account, insurance, and facility data.
  - Include only the patient’s SSN.
  - Include records only when the balance is greater than $100.00.
  - Export file name format: `export-yyyy-mm-dd.[FacilityName].csv`.

- **Other Clients:** 
  - May use the same type of export as GeneralHospital or VeteranHospital.

### Data Schema

The data is stored in the following schema:

- **Account**
  - Id, ClientId, AccountNumber, Balance, FacilityId, AdmitDate, DischargeDate, PatientId
- **Facility**
  - Id, FacilityName, AddressLine1, AddressLine2, City, State, Zip
- **Patient**
  - Id, FirstName, LastName, MiddleName, SocialSecurityNumber
- **Insurance**
  - Id, PlanName, Policy, GroupNumber
- **AccountInsurance**
  - AccountId, InsuranceId
- **Client**
  - Id, Name

## Description
Web-based application which allows us to export data for each client along with viewing export history for each client including the number of accounts, total account balance, and export date for each export.  

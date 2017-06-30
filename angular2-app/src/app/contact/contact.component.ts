import { Component, OnInit } from '@angular/core';
import { ContactsComponent } from './contacts.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  countries = [
    {'name': 'Please select your country'},
    {'name': 'Afghanistan'}, {'name': 'Albania'}, {'name': 'Algeria'}, {'name': 'Andorra'}, {'name': 'Angola'},
    {'name': 'Antigua and Barbuda'}, {'name': 'Argentina'}, {'name': 'Armenia'}, {'name': 'Australia'}, {'name': 'Austria'},
    {'name': 'Azerbaijan'}, {'name': 'Bahamas'}, {'name': 'Bahrain'}, {'name': 'Bangladesh'}, {'name': 'Barbados'},
    {'name': 'Belarus'}, {'name': 'Belgium'}, {'name': 'Belize'}, {'name': 'Benin'}, {'name': 'Bhutan'},
    {'name': 'Bolivia'}, {'name': 'Bosnia and Herzegovina'}, {'name': 'Botswana'}, {'name': 'Brazil'}, {'name': 'Brunei'},
    {'name': 'Bulgaria'}, {'name': 'Burkina Faso'}, {'name': 'Burma (Myanmar)'}, {'name': 'Burundi'}, {'name': 'Cambodia'},
    {'name': 'Cameroon'}, {'name': 'Canada'}, {'name': 'Cape Verde'}, {'name': 'Central African Republic'}, {'name': 'Chad'},
    {'name': 'Chile'}, {'name': 'China'}, {'name': 'Colombia'}, {'name': 'Comoros'}, {'name': 'Congo'},
    {'name': 'Costa Rica'}, {'name': 'Côte d\'Ivoire'}, {'name': 'Croatia'}, {'name': 'Cuba'}, {'name': 'Cyprus'},
    {'name': 'Czech Republic'}, {'name': 'Denmark'}, {'name': 'Djibouti'}, {'name': 'Dominica'}, {'name': 'Dominican Republic'},
    {'name': 'East Timor'}, {'name': 'Ecuador'}, {'name': 'Egypt'}, {'name': 'El Salvador'}, {'name': 'Equatorial Guinea'},
    {'name': 'Eritrea'}, {'name': 'Estonia'}, {'name': 'Ethiopia'}, {'name': 'Fiji'}, {'name': 'Finland'},
    {'name': 'France'}, {'name': 'Gabon'}, {'name': 'Gambia'}, {'name': 'Georgia'}, {'name': 'Germany'},
    {'name': 'Ghana'}, {'name': 'Greece'}, {'name': 'Grenada'}, {'name': 'Guatemala'}, {'name': 'Guinea'},
    {'name': 'Guinea-Bissau'}, {'name': 'Guyana'}, {'name': 'Haiti'}, {'name': 'Honduras'}, {'name': 'Hungary'},
    {'name': 'Iceland'}, {'name': 'India'}, {'name': 'Indonesia'}, {'name': 'Iran'}, {'name': 'Iraq'},
    {'name': 'Ireland'}, {'name': 'Israel'}, {'name': 'Italy'}, {'name': 'Jamaica'}, {'name': 'Japan'},
    {'name': 'Jordan'}, {'name': 'Kazakhstan'}, {'name': 'Kenya'}, {'name': 'Kiribati'}, {'name': 'North Korea'},
    {'name': 'South Korea'}, {'name': 'Kuwait'}, {'name': 'Kyrgyzstan'}, {'name': 'Laos'}, {'name': 'Latvia'},
    {'name': 'Lebanon'}, {'name': 'Lesotho'}, {'name': 'Liberia'}, {'name': 'Libya'}, {'name': 'Liechtenstein'},
    {'name': 'Lithuania'}, {'name': 'Luxembourg'}, {'name': 'Macedonia'}, {'name': 'Madagascar'}, {'name': 'Malawi'},
    {'name': 'Malaysia'}, {'name': 'Maldives'}, {'name': 'Mali'}, {'name': 'Malta'}, {'name': 'Marshall Islands'},
    {'name': 'Mauritania'}, {'name': 'Mauritius'}, {'name': 'Mexico'}, {'name': 'Micronesia'}, {'name': 'Moldova'},
    {'name': 'Monaco'}, {'name': 'Mongolia'}, {'name': 'Montenegro'}, {'name': 'Morocco'}, {'name': 'Mozambique'},
    {'name': 'Myanmar'}, {'name': 'Namibia'}, {'name': 'Nauru'}, {'name': 'Nepal'}, {'name': 'Netherlands'},
    {'name': 'New Zealand'}, {'name': 'Nicaragua'}, {'name': 'Nigeria'}, {'name': 'Northern Ireland'}, {'name': 'Norway'},
    {'name': 'Pakistan'}, {'name': 'Palau'}, {'name': 'Palestinian State'}, {'name': 'Panama'}, {'name': 'Papua New Guinea'},
    {'name': 'Paraguay'}, {'name': 'Peru'}, {'name': 'Philippines'}, {'name': 'Poland'}, {'name': 'Portugal'},
    {'name': 'Qatar'}, {'name': 'Romania'}, {'name': 'Russia'}, {'name': 'Rwanda'}, {'name': 'Samoa'},
    {'name': 'San Marino'}, {'name': 'São Tomé and Príncipe'}, {'name': 'Saudi Arabia'}, {'name': 'Senegal'}, {'name': 'Serbia'},
    {'name': 'Seychelles'}, {'name': 'Sierra Leone'}, {'name': 'Singapore'}, {'name': 'Slovakia'}, {'name': 'Slovenia'},
    {'name': 'Solomon Islands'}, {'name': 'Somalia'}, {'name': 'South Africa'}, {'name': 'Spain'}, {'name': 'Sri Lanka'},
    {'name': 'St. Kitts and Nevis'}, {'name': 'St. Lucia'}, {'name': 'St. Vincent and the Grenadines'},
    {'name': 'Sudan'}, {'name': 'Suriname'}, {'name': 'Swaziland'}, {'name': 'Sweden'}, {'name': 'Switzerland'},
    {'name': 'Syria'}, {'name': 'Taiwan'}, {'name': 'Tajikistan'}, {'name': 'Tanzania'}, {'name': 'Thailand'},
    {'name': 'Togo'}, {'name': 'Tonga'}, {'name': 'Trinidad and Tobago'}, {'name': 'Tunisia'}, {'name': 'Turkey'},
    {'name': 'Turkmenistan'}, {'name': 'Tuvalu'}, {'name': 'Uganda'}, {'name': 'Ukraine'}, {'name': 'United Arab Emirates'},
    {'name': 'United Kingdom'}, {'name': 'United States'}, {'name': 'Uruguay'}, {'name': 'Uzbekistan'}, {'name': 'Vanuatu'},
    {'name': 'Venezuela'}, {'name': 'Vietnam'}, {'name': 'Yemen'}, {'name': 'Zaire'}, {'name': 'Zambia'},
    {'name': 'Zimbabwe'}];
    selectedCountry = this.countries[0];
    firstName = '';
    lastName = '';
    emailAddress = '';
    phoneNumber = '';
    addressName = '';
    cityName = '';
    zipCode = '';
    websiteName = '';
    commentText = '';
    currentComment: ContactsComponent;
    contactComments: ContactsComponent[] = [
    new ContactsComponent(1, 'Aleksandar', 'Asenov', 'amasenov@outlook.com', '555-555-555', 'Straat',
    'The Hague', 'Netherlands', '5555', 'www.amasenov.com', 'This works fine!')
    ];
    successMsg: Boolean = false;
    errorMsg: Boolean = false;

  constructor() { }

  ngOnInit() { }

  onSentComment() {
    if (this.firstName === '' || this.lastName === '' || this.emailAddress === '' || this.commentText === '' || this.phoneNumber === '' || this.selectedCountry === this.countries[0]) {
      this.errorMsg = true;
    } else {
      this.errorMsg = false;
      this.successMsg = true;
      this.onCreateComment();
    }
  }

  onCreateComment() {
    this.contactComments.push(new ContactsComponent((this.contactComments.length + 1), this.firstName, this.lastName, this.emailAddress,
    this.phoneNumber, this.addressName, this.cityName, this.selectedCountry.name, this.zipCode, this.websiteName, this.commentText));
    this.clearCurrentValues();
  }

  clearCurrentValues() {
    this.selectedCountry = this.countries[0];
    this.firstName = '';
    this.lastName = '';
    this.emailAddress = '';
    this.phoneNumber = '';
    this.addressName = '';
    this.cityName = '';
    this.zipCode = '';
    this.websiteName = '';
    this.commentText = '';
  }

}

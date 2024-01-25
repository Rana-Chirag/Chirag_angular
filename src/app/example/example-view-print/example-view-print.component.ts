import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-view-print',
  templateUrl: './example-view-print.component.html',
})
export class ExampleViewPrintComponent implements OnInit {

  HtmlTemplate = HtmlTemplate;
  JsonData = JsonData;
  FieldMapping = FieldMapping;
  constructor() { }

  ngOnInit(): void {
  }
  //declaring breadscrum
  breadscrums = [
    {
      title: "ViewPrint",
      items: ["example"],
      active: "ViewPrint"
    }
  ]
}
export const HtmlTemplate = `
<img style="height:80px" src="data:image/png;base64,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"/>
<br/>
<table align="left" border='0' cellpadding='2' cellspacing='0' bgcolor='#8ba0e5' width="900">
    <tr bgcolor='#FFFFFF'>
        <td>
            <table align="left" cellpadding='3' cellspacing='0' border='0' bgcolor='#8ba0e5'
                    width="900">
                <tr style='background-color: #E0E1E5; FONT-WEIGHT: 500; FONT-SIZE: 11px; LINE-HEIGHT: 16px; FONT-FAMILY: verdana'>
                    <td colspan="4" style='border:solid 1px #8ba0e5;'>
                        <b>
                            Meeting Summary
                        </b>
                    </td>
                </tr>
                <tr bgcolor='White' style='FONT-WEIGHT: 500; FONT-SIZE: 11px; LINE-HEIGHT: 16px; FONT-FAMILY: verdana'>
                    <td width="200px" style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                        Meeting ID
                    </td>
                    <td width="300px" style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                        [Meeting_ID]
                    </td>
                    <td width="150px" style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                        Meeting date
                    </td>
                    <td width="250px" nowrap style='border:solid 1px #8ba0e5; border-top-width:0;'>
                        [Date]</td>
                </tr>
                <tr bgcolor='White' style='FONT-WEIGHT: 500; FONT-SIZE: 11px; LINE-HEIGHT: 16px; FONT-FAMILY: verdana'>
                    <td style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                        Start time
                    </td>
                    <td style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                        [Start_Time]
                    </td>
                    <td style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                        End time
                    </td>
                    <td style='border:solid 1px #8ba0e5; border-top-width:0;'>
                        [End_Time]</td>
                </tr>
                <tr bgcolor='White' style='FONT-WEIGHT: 500; FONT-SIZE: 11px; LINE-HEIGHT: 16px; FONT-FAMILY: verdana'>
                    <td style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                        Meeting with
                    </td>
                    <td style='border:solid 1px #8ba0e5; border-top-width:0;'>
                      [MeetingWith]
                      
                     </td>
                     <td id="customertd" style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                         <label id="lblcustomer">Customer/Prospect name</label>
               
                      
                    </td>
                    <td id="CustomerValuetd" style='border:solid 1px #8ba0e5; border-top-width:0;'>
                        <label id="lblClienNm">[ClientNM]</label>
                        <label id="lblprospect">[Prospect]</label>
                    </td>

                </tr>

                <tr bgcolor='White' style='FONT-WEIGHT: 500; FONT-SIZE: 11px; LINE-HEIGHT: 16px; FONT-FAMILY: verdana'>
                    <td style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                        Meeting Mode
                    </td>
                    <td style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                        [MeetingMode]
                    </td>
                    <td style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                        Meeting Purpose
                    </td>
                    <td style='border:solid 1px #8ba0e5; border-top-width:0;'>
                        [MeetingPurpose]</td>
                </tr>

                <tr bgcolor='White' style='FONT-WEIGHT: 500; FONT-SIZE: 11px; LINE-HEIGHT: 16px; FONT-FAMILY: verdana'>
                    <td style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                        Location
                    </td>
                    <td style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                        [Location]
                    </td>
                    <td style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                        Entry By
                    </td>
                    <td style='border:solid 1px #8ba0e5; border-top-width:0;'>
                        [User]</td>
                </tr>
                <tr bgcolor='White' style='FONT-WEIGHT: 500; FONT-SIZE: 11px; LINE-HEIGHT: 16px; FONT-FAMILY: verdana'>
                    <td valign="top" style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                        Topic of discussion
                    </td>
                    <td colspan="3" style='border:solid 1px #8ba0e5; border-top-width:0;'>
                        [Topic]
                    </td>
                </tr>
                <tr bgcolor='White' style='FONT-WEIGHT: 500; FONT-SIZE: 11px; LINE-HEIGHT: 16px; FONT-FAMILY: verdana'>
                    <td valign="top" style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                        Agenda
                    </td>
                    <td colspan="3" style='border:solid 1px #8ba0e5; border-top-width:0;'>
                        [Agenda]
                    </td>
                </tr>
            </table>           
        </td>
    </tr>
    <tr bgcolor='#FFFFFF'>
        <td>
            <br />
            <table align="left" border="0" cellpadding="0" cellspacing="0" width="900" style="max-width:900">
                <tr bgcolor='White' style='FONT-WEIGHT: 500; FONT-SIZE: 11px; LINE-HEIGHT: 16px; FONT-FAMILY: verdana'>
                    <td>
                        <table align="left" cellpadding='3' cellspacing='0' border='0' bgcolor='#8ba0e5'
                            width="100%">
                            <tr style='background-color: #E0E1E5; FONT-WEIGHT: 500; FONT-SIZE: 11px; LINE-HEIGHT: 16px; FONT-FAMILY: verdana'>
                                <td colspan="5" style='border:solid 1px #8ba0e5;'>
                                    <b>
                                        Attendee List
                                    </b>
                                </td>
                            </tr>
                            <tr style='background-color: #E0E1E5; FONT-WEIGHT: 500; FONT-SIZE: 11px; LINE-HEIGHT: 16px; FONT-FAMILY: verdana' align="center">
                                <td width="35px" style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                                    <b>Sr.</b>
                                </td>
                                <td style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                                    <b>[Attendee_Name_Label]</b>
                                </td>
                                <td style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                                    <b>Designation</b>
                                </td>
                                <td style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                                    <b>Organization</b>
                                </td>
                                <td style='border:solid 1px #8ba0e5; border-top-width:0;'>
                                    <b>E-mail Id</b>
                                </td>
                            </tr>
                            <tr data-row="Attendee" bgcolor='White' style='FONT-WEIGHT: 500; FONT-SIZE: 11px; LINE-HEIGHT: 16px; FONT-FAMILY: verdana'>
                                <td align="center" style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                                    [Attendee_ID]
                                </td>
                                <td style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                                    [Attendee.Person_Name]
                                </td>
                                <td style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                                    [Attendee.Designation]
                                </td>
                                <td style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                                    [Attendee.Organization]
                                </td>
                                <td style='border:solid 1px #8ba0e5; border-top-width:0;'>
                                    [Attendee.Email_ID]
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr bgcolor='White' style='FONT-WEIGHT: 500; FONT-SIZE: 11px; LINE-HEIGHT: 16px; FONT-FAMILY: verdana'>
                    <td>
                        <br />
                        <table align="left" cellpadding='3' cellspacing='0' border='0' bgcolor='#8ba0e5'
                            width="100%">
                            <tr style='background-color: #E0E1E5; FONT-WEIGHT: 500; FONT-SIZE: 11px; LINE-HEIGHT: 16px; FONT-FAMILY: verdana'>
                                <td colspan="6" style='border:solid 1px #8ba0e5;'>
                                    <b>
                                        Minutes of Meeting
                                    </b>
                                </td>
                            </tr>
                            <tr style='background-color: #E0E1E5; FONT-WEIGHT: 500; FONT-SIZE: 11px; LINE-HEIGHT: 16px; FONT-FAMILY: verdana' align="center">
                                <td width="35px" style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                                    <b>Sr.</b>
                                </td>
                                <td style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                                    <b>Topic / Module</b>
                                </td>
                                <td width='500px' style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                                    <b>Description</b>
                                </td>
                                <td style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                                    <b>Action Point</b>
                                </td>
                                <td style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                                    <b>Action By</b>
                                </td>
                                <td style='border:solid 1px #8ba0e5; border-top-width:0;'>
                                    <b>Attachments</b>
                                </td>
                            </tr>
                            <tr data-row="Minutes" bgcolor='White' style='FONT-WEIGHT: 500; FONT-SIZE: 11px; LINE-HEIGHT: 16px; FONT-FAMILY: verdana'>
                                <td align="center" style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                                    [Minutes.Sr]
                                </td>
                                <td style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                                    [Minutes.Module]
                                </td>
                                <td width='500px' style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                                    [Minutes.Description]
                                </td>
                                <td style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                                    [Minutes.Action_Point]
                                </td>
                                <td style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                                    [Minutes.Action_By]
                                </td>
                                <td style='border:solid 1px #8ba0e5; border-top-width:0;'>
                                    [Minutes.Attachments]
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr bgcolor='#FFFFFF'>
        <td>
            <br />
            <table align="left" cellpadding='3' cellspacing='0' border='0' bgcolor='#8ba0e5' width="900" style="max-width:900">
                <tr style='background-color: #E0E1E5; FONT-WEIGHT: 500; FONT-SIZE: 11px; LINE-HEIGHT: 16px; FONT-FAMILY: verdana'>
                    <td colspan="2" style='border:solid 1px #8ba0e5;'>
                        <b>
                            Next Steps
                        </b>
                    </td>
                </tr>
                <tr bgcolor='White' style='FONT-WEIGHT: 500; FONT-SIZE: 11px; LINE-HEIGHT: 16px; FONT-FAMILY: verdana'>
                    <td width="185px" style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                        Next Meeting
                    </td>
                    <td style='border:solid 1px #8ba0e5; border-top-width:0;'>
                        [Next_Meeting]
                    </td>
                </tr>
                <tr bgcolor='White' style='FONT-WEIGHT: 500; FONT-SIZE: 11px; LINE-HEIGHT: 16px; FONT-FAMILY: verdana'>
                    <td width="185px" style='border:solid 1px #8ba0e5; border-top-width:0; border-right-width:0'>
                        Description
                    </td>
                    <td style='border:solid 1px #8ba0e5; border-top-width:0;'>
                        [Next_Description]
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
`;

export const JsonData = {
  CompanyCode: 10138,
  Meeting_ID: "MT000837",
  Meeting_Date: "2023-06-20",
  Start_Time: "11:30:00",
  End_Time: "12:50:00",
  Customer_ID: "C00010414",
  Customer_Name: "SKECHERS SOUTH ASIA PRIVATE LIMITED ",
  Location: "Online",
  Topic_Of_Discussion: "Cygnet E-way URL change of Staging and Testing of It.",
  Agenda: "<p>Cygnet E-way URL change of Staging and Testing of It.</p>\n",
  Next_Meeting_Date: "2023-06-20 16:00:00",
  Next_Meeting_Time: "16:00:00",
  Next_Meeting_Description: "UAT Meeting with WH team of SKECHERS for MExpress",
  Cancelled: false,
  Entry_By: "aakashmishra",
  Entry_Date: "2023-06-20T13:17:55.143",
  IsDraft: false,
  Prospect_Name: "",
  Meeting_With: "Customer",
  Meeting_Mode: "Online",
  Meeting_Purpose: "UAT",
  Next_Meeting_Mode: "",
  AttendeeNameLabel: "User Name",
  Attendee: [
    {
      ID: 1,
      CompanyCode: 10138,
      Meeting_ID: "MT000837",
      Person_Name: "aakash mishra",
      Designation: "PROJECT MANAGER",
      Organization: "WebXpress",
      Email_ID: "aakash.mishra@webxpress.in",
      Entry_By: "aakashmishra",
    },
    {
      ID: 2,
      CompanyCode: 10138,
      Meeting_ID: "MT000837",
      Person_Name: "Janhavi Rambade",
      Designation: "Customer Support Executive",
      Organization: "WebXpress",
      Email_ID: "janhavi@webxpress.in",
      Entry_By: "aakashmishra",
    },
    {
      ID: 3,
      CompanyCode: 10138,
      Meeting_ID: "MT000837",
      Person_Name: "Srujal Khanpara",
      Designation: "Developer",
      Organization: "WebXpress",
      Email_ID: "srujal@webxpress.in",
      Entry_By: "aakashmishra",
    },
    {
      ID: 4,
      CompanyCode: 10138,
      Meeting_ID: "MT000837",
      Person_Name: "Shrutika",
      Designation: "Developer",
      Organization: "WebXpress",
      Email_ID: "shrutika@webxpress.in",
      Entry_By: "aakashmishra",
    },
    {
      ID: 5,
      CompanyCode: 10138,
      Meeting_ID: "MT000837",
      Person_Name: "Nimisha Goyal",
      Designation: "IT Lead",
      Organization: "Skechers",
      Entry_By: "aakashmishra",
    },
    {
      ID: 6,
      CompanyCode: 10138,
      Meeting_ID: "MT000837",
      Person_Name: "Anup Yelve",
      Organization: "Skechers",
      Entry_By: "aakashmishra",
    },
    {
      ID: 7,
      CompanyCode: 10138,
      Meeting_ID: "MT000837",
      Person_Name: "Chintan Hakani",
      Entry_By: "aakashmishra",
    },
    {
      ID: 6,
      CompanyCode: 10138,
      Meeting_ID: "MT000837",
      Person_Name: "Anup Yelve",
      Organization: "Skechers",
      Entry_By: "aakashmishra",
    },
    {
      ID: 7,
      CompanyCode: 10138,
      Meeting_ID: "MT000837",
      Person_Name: "Chintan Hakani",
      Entry_By: "aakashmishra",
    },
    {
      ID: 6,
      CompanyCode: 10138,
      Meeting_ID: "MT000837",
      Person_Name: "Anup Yelve",
      Organization: "Skechers",
      Entry_By: "aakashmishra",
    },
    {
      ID: 7,
      CompanyCode: 10138,
      Meeting_ID: "MT000837",
      Person_Name: "Chintan Hakani",
      Entry_By: "aakashmishra",
    },
  ],
  Minutes: [
    {
      ID: 1,
      CompanyCode: 10138,
      Meeting_ID: "MT000837",
      Topic: "Cygnet E-way URL change of Staging and Testing of It.",
      Description:
        "<p>Update: Meeting with SKECHERS team.</p>\n\n<p>We conducted a meeting with SKECHERS team with regards to testing of Cygnet E-way bill generation through IRN number, to which we were successfully able to generate E-way bill.&nbsp;</p>\n\n<p><b>INV2324-0011371 - 241009999562 (Mudita)</b><br />\nINV2324-0012912 - 201009999560 (MExpress)<br />\nINV2324-0011366 - 261009999555 (DHL)</p>\n\n<p>For DPW (Delex), we couldn&#39;t test the E-way bill generation since, the CEN Number is not updated on the cygnet portal hence, we get error message from Cygnet system everytime we are doing the test. (this was acknowledge by Skechers team)<br />\n&nbsp;</p>\n",
      Action_Point:
        "Move to Production, when we get updated time for publishing this on Live environment",
      Action_By: "Aakash and Srujal",
      Entry_By: "aakashmishra",
      Attachments:
        ",10138/MinutesOfMeeting/2023/Jun/ECPL_MicrosoftTeams-image (3).png,",
      IsUplodedFrom: "",
    },
    {
      ID: 2,
      CompanyCode: 10138,
      Meeting_ID: "MT000837",
      Topic: "Cygnet E-way URL change of Staging and Testing of It.",
      Description: "",
      Action_Point:
        "Move to Production, when we get updated time for publishing this on Live environment",
      Action_By: "Aakash and Srujal",
      Entry_By: "aakashmishra",
      Attachments:
        ",10138/MinutesOfMeeting/2023/Jun/ECPL_MicrosoftTeams-image (3).png,",
      IsUplodedFrom: "",
    },
  ],
};

export const FieldMapping = [{
  Key: "[Attendee_Name_Label]",
  Value: "AttendeeNameLabel"
}, {
  Key: "[Meeting_ID]",
  Value: "Meeting_ID"
}, {
  Key: "[Date]",
  Value: "Meeting_Date"
}, {
  Key: "[Start_Time]",
  Value: "Start_Time"
}, {
  Key: "[End_Time]",
  Value: "End_Time"
}, {
  Key: "[MeetingWith]",
  Value: "Meeting_With"
}, {
  Key: "[ClientNM]",
  Value: "Customer_ID"
}, {
  Key: "[Prospect]",
  Value: "Customer_Name"
}, {
  Key: "[MeetingMode]",
  Value: "Meeting_Mode"
}, {
  Key: "[MeetingPurpose]",
  Value: "Meeting_Purpose"
}, {
  Key: "[Location]",
  Value: "Location"
}, {
  Key: "[User]",
  Value: "Entry_By"
}, {
  Key: "[Topic]",
  Value: "Topic_Of_Discussion"
}, {
  Key: "[Agenda]",
  Value: "Agenda"
}, {
  Key: "[Attendee_ID]",
  Value: "Attendee.[#].ID"
}, {
  Key: "[Attendee.Person_Name]",
  Value: "Attendee.[#].Person_Name"
}, {
  Key: "[Attendee.Designation]",
  Value: "Attendee.[#].Designation"
}, {
  Key: "[Attendee.Organization]",
  Value: "Attendee.[#].Organization"
}, {
  Key: "[Attendee.Email_ID]",
  Value: "Attendee.[#].Email_ID"
}, {
  Key: "[Minutes.Sr]",
  Value: "Minutes.[#].ID"
}, {
  Key: "[Minutes.Module]",
  Value: "Minutes.[#].Topic"
}, {
  Key: "[Minutes.Description]",
  Value: "Minutes.[#].Description"
}, {
  Key: "[Minutes.Action_Point]",
  Value: "Minutes.[#].Action_Point"
}, {
  Key: "[Minutes.Action_By]",
  Value: "Minutes.[#].Action_By"
}, {
  Key: "[Minutes.Attachments]",
  Value: "Minutes.[#].Attachments"
}, {
  Key: "[Next_Meeting]",
  Value: "Next_Meeting_Date"
}, {
  Key: "[Next_Description]",
  Value: "Next_Meeting_Description"
}];
CREATE TABLE [dbo].[InsuranceDB] (
    [Id]              INT          IDENTITY (1, 1) NOT NULL,
    [FirstName]       VARCHAR (50) NOT NULL,
    [LastName]        VARCHAR (50) NOT NULL,
    [EmailAddress]    VARCHAR (50) NOT NULL,
    [DateofBirth]     VARCHAR (12) NOT NULL,
    [CarYear]         VARCHAR (50) NOT NULL,
    [CarMake]         VARCHAR (50) NOT NULL,
    [CarModel]        VARCHAR (50) NOT NULL,
    [DUI]             BIT          NOT NULL,
    [SpeedingTickets] INT          NOT NULL,
    [FullCoverage]    BIT          NOT NULL,
    [UserQuote]       FLOAT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

